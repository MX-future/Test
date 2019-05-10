function computer(){
	int s=0;
	int x=11;
	int a[9];
	for(int i=11;i<100;i++){
		if((i%x)==0){
			for(int j=0;j<=a.length;j++){
				a[j]=i;
				s*=a[j];
			}
		}
	}
	console.log(s);
	}
	computer();
	console.log('s');