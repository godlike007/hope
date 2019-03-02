Page({
  data: {
    art: {},
    symptom_list: [
      {
        id:1,
        href: ".../symptomDetail/symptomDetail",
        name: "怕冷"
      },
    ],
    symptom_items: [
      {
        title:"身体感觉",
        list: [{
          id:1,
          name: "怕热",
          selected:false
        },
        {
          id:2,
          name: "怕冷",
          selected:false
        },
        {
          id:3,
          name: "手足凉",
          selected:false
        },]
      },
      {
        title: "鼻子与呼吸",
        must:true,
        list: [{
          id:1,
          name: "鼻塞",
          selected:false
        },
        {
          id:2,
          name: "流涕",
          selected:false
        },
        {
          id:3,
          name: "呼吸憋闷",
          selected:false
        }]
      },
    ],
    sign_items: [
      {
        title:"胃部感觉",
        must:true,
        list: [{
          id:1,
          name: "胃痛",
          selected:false
        },
        {
          id:2,
          name: "胃胀",
          selected:false
        },
        {
          id:3,
          name: "呕吐",
          selected:false
        },]
      },
      {
        title: "腹部感觉",
        list: [{
          id:1,
          name: "腹痛明显",
          selected:false
        },
        {
          id:2,
          name: "腹部隐痛",
          selected:false
        },
        {
          id:3,
          name: "肠鸣",
          selected:false
        }]
      },
    ],
    half_items: [
      {
        title:"容易心烦",
        must:true,
        list: [{
          id:1,
          name: "是",
          selected:false
        },
        {
          id:2,
          name: "否",
          selected:false
        }]
      },
      {
        title: "口中感觉",
        list: [{
          id:1,
          name: "发苦",
          selected:false
        },
        {
          id:2,
          name: "发酸",
          selected:false
        },
        {
          id:3,
          name: "口臭",
          selected:false
        }]
      },
    ],
    certificate_items: [
      {
        id:1,
        name: "头痛",
        selected:false
      },
      {
        id:2,
        name: "高热》38.5",
        selected:false
      },
      {
        id:3,
        name: "发热《38.5",
        selected:false
      },
    ]

  },
  submit: function () {
    debugger;

    if(this.is_check()){
      wx.navigateTo({
        url: '../result/result?ids='+this.get_submit_ids()+"&name="+this.data.symptom_list[0].name
      })
    }
    else{
      wx.showModal({
        //title: '提示',
        content: '请填写必填项！',
      })
    }

    
  },
  is_check: function () {
    let is_check = true;

    this.data.symptom_items.forEach(element => {
      if(element.Must){
        let select = false;
        element.Symps.forEach(function(o){
          if(o['selected']){
            select = true;
          }
        })
        if(!select){
          is_check=false;
        }
      }

      
    });

    
      
    this.data.sign_items.forEach(element => {
      if(element.Must){
        let select = false;
        element.Symps.forEach(function(o){
          if(o['selected']){
            select = true;
          }
        })
        if(!select){
          is_check=false;
        }
      }
    });
      
    this.data.sign_items.forEach(element => {
      if(element.Must){
        let select = false;
        element.Symps.forEach(function(o){
          if(o['selected']){
            select = true;
          }
        })
        if(!select){
          is_check=false;
        }
      }
    });
    return is_check;
  },
  select_symptoms: function(e) {
    debugger;
    var d = e.target.dataset;
    this.data.symptom_items[d.index1].Symps[d.index2].selected = !d.selected;

    this.setData({
      symptom_items:this.data.symptom_items
    })
    
  },
  select_sign: function(e) {
    var d = e.target.dataset;
    this.data.sign_items[d.index1].Symps[d.index2].selected = !d.selected;

    this.setData({
      sign_items:this.data.sign_items
    })
    
  },
  select_half: function(e) {
    var d = e.target.dataset;
    this.data.half_items[d.index1].Symps[d.index2].selected = !d.selected;

    this.setData({
      half_items:this.data.half_items
    }) 
  },
  //获取提交选项id集合
  get_submit_ids: function() {
    debugger;
    var id_list = [];
    this.data.symptom_items.forEach(element => {
      element.Symps.forEach(function(o){
        if(o['selected']){
          id_list.push(o.Id);
        }
      })
    });

    this.data.sign_items.forEach(element => {
      element.Symps.forEach(function(o){
        if(o['selected']){
          id_list.push(o.Id);
        }
      })
    });

    this.data.half_items.forEach(element => {
      element.Symps.forEach(function(o){
        if(o['selected']){
          id_list.push(o.Id);
        }
      })
    });
return id_list.join(',');
  },
  select_certificate: function(e) {
    var d = e.target.dataset;
    this.data.certificate_items[d.id-1].selected = !d.selected;

    this.setData({
      certificate_items:this.data.certificate_items
    })
    
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: ''
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.chinabeishi.cn/HttpHandleGetSymps.ashx?sid=' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        debugger;
        let list1 = res.data.top;
        list1.forEach(element => {
          element.Symps.forEach(function(o){
            o['selected'] = false;
          })
        });

        let list2 = res.data.bottom;
        list2.forEach(element => {
          element.Symps.forEach(function(o){
            o['selected'] = false;
          })
        });

        let list3 = res.data.middle;
        list3.forEach(element => {
          element.Symps.forEach(function(o){
            o['selected'] = false;
          })
        });
        that.data.symptom_list[0].name = options.name;
         that.setData({
          symptom_items: list1,
          sign_items: list2,
          half_items: list3,
          symptom_list:that.data.symptom_list
         })


         
         console.log(res.data)
      }
    })
  }
})