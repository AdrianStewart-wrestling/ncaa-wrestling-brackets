const H=require('./harness.js'); const D=H.readData(1998);
const res={'Iowa':0.5,'Oklahoma State':2,'Illinois':1.5,'Oregon State':0.5,'Minnesota':0,'Penn State':0,'Central Michigan':0,'Iowa State':0,'West Virginia':0,'Ohio':0};
for(const s of Object.keys(res)){const tf=D.filter(r=>r.winner_school===s&&/^TF/.test(r.result)); const def=D.filter(r=>r.winner_school===s&&/^(DEF|M FOR|DQ|FOR)/.test(r.result));
 console.log(s.padEnd(18),'over by',String(res[s]).padEnd(4),'TF wins',tf.length,'(max TF-1 reduction',tf.length*0.5+')','  DEF/MFOR wins',def.length, tf.map(r=>r.result).join(', '));}
