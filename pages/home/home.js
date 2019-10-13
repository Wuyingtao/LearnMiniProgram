Page({
  data:{
    name:'CoderWhy',
    age:18,
    students:[
      { id: 110, name: "Kobe", age: 30 },
      { id: 111, name: "James", age: 25 },
      { id: 112, name: "Kurry", age: 20 }
    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({
      counter:this.data.counter+1
    })
  }
})