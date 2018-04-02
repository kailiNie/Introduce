let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = function () {
  const sellerPhoneList = [];
  [...Array(20).keys()].map(item => {
    sellerPhoneList.push(Random.integer(10000000000, 20000000000))
  })

  const MyHardWareList = [];
  [...Array(20).keys()].map(item => {
    MyHardWareList.push({
      Id: Random.id(),
      GoodImage: 'http://tdtk.oss-cn-shenzhen.aliyuncs.com/f56c0773-7574-4319-a47c-2bdc79c5b8ac.jpg',
      GoodName: Random.cparagraph(1, 100),
      HardWareNo: Random.word(1, 100),
      OrderNo: Random.word(1, 100),
      InviteStatus: 1,
    })
  })

  const MySellerList=[];
  [...Array(20).keys()].map(item=>{
    MySellerList.push({
      Id:Random.id(),
      Logo:'http://tdtk.oss-cn-shenzhen.aliyuncs.com/f56c0773-7574-4319-a47c-2bdc79c5b8ac.jpg',
      Name:Random.cparagraph(1, 100),
      LastTransactionDate:Random.date(),
      'GoodNumber|1-100':100,
      TotalEarnings:100000,
    })
  })

  const MySellerDetail=[];
  [...Array(20).keys()].map(item=>{
    MySellerDetail.push({
      HardWareName:Random.cparagraph(1, 100),
      LastTransactionDate:Random.date(),
      TotalAmount:1000000000,
      TotalEarnings:1000000000,
    })
  })

  const a=[];
  [...Array(20).keys()].map(item=>{
    a.push({
      Id:Random.id(),
      GoodName:Random.cparagraph(1, 100),
      HardWareNo:Random.word(1, 100)
    })
  })

  const data = {
    SellerPhoneList: {
      IsSuccess: true,
      Data: sellerPhoneList
    },
    MyHardWareList: {
      IsSuccess: true,
      Data: MyHardWareList,
    },
    MyHardWareDetail: {
      IsSuccess:true,
      Data:{
        Id: Random.id(),
        GoodImage: 'http://tdtk.oss-cn-shenzhen.aliyuncs.com/f56c0773-7574-4319-a47c-2bdc79c5b8ac.jpg',
        GoodName: Random.cparagraph(1, 100),
        HardWareNo: Random.word(1, 100),
        OrderNo: Random.word(1, 100),
        InviteStatus: 1,
      }
    },
    MySellerList:{
      IsSuccess:true,
      Data:MySellerList,
    },
    MySellerDetail:{
      IsSuccess:true,
      Data:{
        SellerName:'SellerName',
        SellerTransaction:MySellerDetail,
      }
    },
    MyHardWareListWithoutAllocation:{
      IsSuccess:true,
      Data:a
    }
  }
  return data
}
