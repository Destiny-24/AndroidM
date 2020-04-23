const PAGE={
  data:{
    phone:null,
    url:'https://www.jevescript.com/api/task/mobile'
  },
  init:function(){
    this.bind();
  },
  bind:function(){
    $(".button").on("click",this.clickbutton);
  },
  clickbutton:function(){
    let value = $('.num-input').val().trim();
    let reg = new RegExp(/^1[3456789]\d{9}$/);
    if(reg.test(value)){
      PAGE.data.phone = value;
      alert("申请成功");
      $('.false-hint').css('display','none');
      $('.num-input').val('')
    }else{
      $('.false-hint').css('display','block');
    }
  },

}
PAGE.init()