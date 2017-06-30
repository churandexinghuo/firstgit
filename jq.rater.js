(function(){
	jQuery.fn.rater=function(option){
		var max=option&&option.max||5;
		var fn=option&&option.click_after;
		return this.each(function(){
			var htmlStr='';
			var score;
			for(var i=0;i<max;i++){
				htmlStr+="<span title="+(i+1)+">☆</span>"
			}
			this.innerHTML=htmlStr;
			$('span',this).css('cursor','pointer').hover(function(){
				if(score) return;
				$(this).html('★').prevAll().html('★').end().nextAll().html('☆');
			},function(){
				if(score) return;
				$(this).html('☆').siblings().html('☆');
			}).click(function(){
				score=this.title-0;
				$(this).html('★').prevAll().html('★').end().nextAll().html('☆');
				if(typeof fn==='function'){
					fn(this.parentNode, score);
				}
			})
		})
	}
})();

