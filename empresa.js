function percent()
		{
			let nm = parseFloat(document.getElementById("percA0").innerHTML, 10);
			let nPatNet = parseFloat(document.getElementById("percP0").innerHTML, 10);
			let nPasNoCorrent = parseFloat(document.getElementById("percP1").innerHTML, 10);
			let nPasCorrent = parseFloat(document.getElementById("percP2").innerHTML, 10);
			var sz = 4.5;
			let acNoCorrent = document.getElementById("acNoCorrent");
			let acCorrent = document.getElementById("acCorrent");
			let patNet = document.getElementById("patNet");
			let pasNoCorrent = document.getElementById("pasNoCorrent");
			
			/* acNoCorrent */
			acNoCorrent.style.backgroundColor = "#9b59b6";
			acNoCorrent.innerHTML = nm + "%";
			acNoCorrent.style.height = nm * sz + "px";
			acNoCorrent.style.width = 75 * sz + "px";
			acNoCorrent.style.lineHeight = nm * sz + "px";
			
			/* acCorrent */
			acCorrent.style.backgroundColor = "#27ae60";
			acCorrent.innerHTML = (100 - nm).toFixed(2) + "%";
			acCorrent.style.height = (100 - nm) * sz + "px";
			acCorrent.style.width = 75 * sz + "px";
			acCorrent.style.lineHeight = (100 - nm) * sz + "px";

			/* patNet */
			patNet.style.backgroundColor = "#f1c40f";
			patNet.innerHTML = nPatNet + "%";
			patNet.style.height = nPatNet * sz + "px";
			patNet.style.width = 75 * sz + "px";
			patNet.style.lineHeight = nPatNet * sz + "px";

			/* pasNoCorrent */
			pasNoCorrent.style.backgroundColor = "#3498db";
			pasNoCorrent.innerHTML = nPasNoCorrent + "%";
			pasNoCorrent.style.height = nPasNoCorrent * sz + "px";
			pasNoCorrent.style.width = 75 * sz + "px";
			pasNoCorrent.style.lineHeight = nPasNoCorrent * sz + "px";

			/* pasCorrent */
			pasCorrent.style.backgroundColor = "#f39c12";
			pasCorrent.innerHTML = nPasCorrent + "%";
			pasCorrent.style.height = nPasCorrent * sz + "px";
			pasCorrent.style.width = 75 * sz + "px";
			pasCorrent.style.lineHeight = nPasCorrent * sz + "px";

			var selects =  document.getElementsByClassName("chart");
  			for(var i = 0; i < selects.length; i++) {
			    selects[i].style.fontSize = "2vw";
			    selects[i].style.fontFamily = "Alcubierre";
			    selects[i].style.transition = "1s";
  			} 

		}

		function search(ele) {
        	alert(ele.value);        
		}

		function calcTotalSumPas()
		{
			if(event.key === 'Enter') {
				totalSumPas();
			}
		}

		function calcTotalSumAct()
		{
			if(event.key === 'Enter') {
				totalSumAct();
			}
		}


		function totalSumPas()
		{
			let total = 0;
			var pa = [3];
			for (var i = 0; i < 3; ++i) {
				pa[i] = parseInt(document.getElementById("pa" + i).value, 10);
				if (isNaN(pa[i]))
				{
					document.getElementById("pa" + i).value = "0";
					pa[i] = 0;
				}
				total += pa[i];
			}

			document.getElementById("totalPa").innerHTML = total.toString();

			if (total == 0) {
				document.getElementById("percP0").innerHTML = "33.33";
				document.getElementById("percP1").innerHTML = "33.33";
				document.getElementById("percP2").innerHTML = "33.33";
			}

			else
			{
				document.getElementById("percP0").innerHTML = (pa[0] * 100 / total).toFixed(2).toString();
				document.getElementById("percP1").innerHTML = (pa[1] * 100 / total).toFixed(2).toString();
				document.getElementById("percP2").innerHTML = (pa[2] * 100 / total).toFixed(2).toString();
			}
			percent();
			ratioCalc();

			if (total != parseInt(document.getElementById("totalAc").innerHTML))
			{
				document.getElementById("totalPa").style.backgroundColor = "#e74c3c";
				document.getElementById("totalAc").style.backgroundColor = "#e74c3c";
			}
			else
			{
				document.getElementById("totalPa").style.backgroundColor = "transparent";				
				document.getElementById("totalAc").style.backgroundColor = "transparent";
			}

		}

		function totalSumAct()
		{
			let total = 0;
			var ac = [4];
			for (var i = 0; i < 4; ++i) {
				ac[i] = parseInt(document.getElementById("ac" + i).value, 10);
				if (isNaN(ac[i]))
				{
					document.getElementById("ac" + i).value = "0";
					ac[i] = 0;
				}
				total += ac[i]
			}
			document.getElementById("totalAc").innerHTML = total.toString();
			if (total == 0) {
				document.getElementById("percA0").innerHTML = "50.00";
				document.getElementById("percA1").innerHTML = "16.67";
				document.getElementById("percA2").innerHTML = "16.67";
				document.getElementById("percA3").innerHTML = "16.67";
			}

			else
			{
				document.getElementById("percA0").innerHTML = (ac[0] * 100 / total).toFixed(2).toString();
				document.getElementById("percA1").innerHTML = (ac[1] * 100 / total).toFixed(2).toString();
				document.getElementById("percA2").innerHTML = (ac[2] * 100 / total).toFixed(2).toString();
				document.getElementById("percA3").innerHTML = (ac[3] * 100 / total).toFixed(2).toString();
			}
			percent();
			ratioCalc();

			if (total != parseInt(document.getElementById("totalPa").innerHTML))
			{
				document.getElementById("totalAc").style.backgroundColor = "#e74c3c";
				document.getElementById("totalPa").style.backgroundColor = "#e74c3c";
			}
			else
			{
				document.getElementById("totalAc").style.backgroundColor = "transparent";
				document.getElementById("totalPa").style.backgroundColor = "transparent";				
			}

		}

		window.onload = () => {
			totalSumPas();
			totalSumAct();
		}


		function ratioCalc()
		{
			document.getElementById("RE").innerHTML = '<b>Ràtio endeutament: </b>' + (parseFloat(document.getElementById("pa0").value) / (parseFloat(document.getElementById("pa0").value, 10) + parseFloat(document.getElementById("pa1").value) + parseFloat(document.getElementById("pa2").value))).toFixed(2);

			document.getElementById("RQD").innerHTML = '<b>Ratio de qualitat del deute: </b>' + (parseFloat(document.getElementById("pa2").value) / (parseFloat(document.getElementById("pa1").value, 10) + parseFloat(document.getElementById("pa2").value))).toFixed(2);

			document.getElementById("RL").innerHTML = '<b>Ratio de liquiditat: </b>' + (parseFloat(document.getElementById("ac1").value) / parseFloat(document.getElementById("pa2").value)).toFixed(2);

			document.getElementById("TMC").innerHTML = '<b>Termini mitjà de cobrament: </b>';
		}
