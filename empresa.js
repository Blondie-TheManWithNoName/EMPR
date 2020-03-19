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
		acCorrent.innerHTML = Number((100 - nm).toFixed(2)) + "%";
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

	function calcTotalSum()
	{
		if(event.key === 'Enter') {
			totalSumAct();
			totalSumPas();
		}
	}


	function totalSumPas()
	{
		let total = 0;
		var pa = [3];
		for (var i = 0; i < 3; ++i) {
			pa[i] = parseFloat(document.getElementById("pa" + i).value);
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

		if (total != parseFloat(document.getElementById("totalAc").innerHTML))
		{
			document.getElementById("totalPa").style.backgroundColor = "#c0392b";
			document.getElementById("totalAc").style.backgroundColor = "#c0392b";
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
			ac[i] = parseFloat(document.getElementById("ac" + i).value);
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

		if (total != parseFloat(document.getElementById("totalPa").innerHTML))
		{
			document.getElementById("totalAc").style.backgroundColor = "#c0392b";
			document.getElementById("totalPa").style.backgroundColor = "#c0392b";
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
		let indMsg = 'indeterminació matemàtica.';
		let pa0 = parseFloat(document.getElementById("pa0").value);
		let pa1 = parseFloat(document.getElementById("pa1").value);
		let pa2 = parseFloat(document.getElementById("pa2").value);
		let ac = parseFloat(document.getElementById("ac1").value) + parseFloat(document.getElementById("ac2").value) + parseFloat(document.getElementById("ac3").value);
		let cl = parseFloat(document.getElementById("fc0").value);
		let pr = parseFloat(document.getElementById("fc1").value);
		let vb = parseFloat(document.getElementById("fc2").value);
		let cb = parseFloat(document.getElementById("fc3").value);

		document.getElementById("RE").innerHTML = '<b>Ràtio endeutament: </b>';
		if (pa0 + pa1 + pa2 == 0)
		{
			if (pa0 != 0)
				document.getElementById("RE").innerHTML += '&#8734; &#8211; L\'empresa està literalment morta.';
			else
				document.getElementById("RE").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("RE").innerHTML += (pa0 / (pa0 + pa1 + pa2)).toFixed(2);
			if ((pa0 / (pa0 + pa1 + pa2)).toFixed(2) > 0.6) document.getElementById("RE").innerHTML += " &#8211; L'empresa té molts deutes";
			else if ((pa0 / (pa0 + pa1 + pa2)).toFixed(2) == 0.6) document.getElementById("RE").innerHTML += " &#8211; L'empresa està bé";
			else if ((pa0 / (pa0 + pa1 + pa2)).toFixed(2) < 0.6) 
			{
				if ((pa0 / (pa0 + pa1 + pa2)).toFixed(2) == 0) document.getElementById("RE").innerHTML += " &#8211; L'empresa no deu res de res!";
				else document.getElementById("RE").innerHTML += " &#8211; L'empresa va molt bé respecte els deutes.";
			}
		}

		document.getElementById("RQD").innerHTML = '<b>Ratio de qualitat del deute: </b>';
		if (pa1 + pa2 == 0) 
		{
			document.getElementById("RQD").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("RQD").innerHTML += (pa2 / (pa1 + pa2)).toFixed(2);
			if ((pa2 / (pa1 + pa2)).toFixed(2) <= 0.5) document.getElementById("RQD").innerHTML += " &#8211; L'empresa té temps per pagar els seus deutes."
			else if ((pa2 / (pa1 + pa2)).toFixed(2) > 0.5)
			{
				if ((pa2 / (pa1 + pa2)).toFixed(2) > 0.95) document.getElementById("RQD").innerHTML += " &#8211; L'empresa ha de pagar els seus deutes inmediatament."
				else document.getElementById("RQD").innerHTML += " &#8211; L'empresa té temps no té molt temps per pagar els seus deutes."
			}
		}



		document.getElementById("RL").innerHTML = '<b>Ratio de liquiditat: </b>';
		if (pa2 == 0)
		{
			if (ac != 0)
				document.getElementById("RL").innerHTML += '&#8734; &#8211; L\'empresa és literalment propietaria de tot l\'univers.';
			else
				document.getElementById("RL").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("RL").innerHTML += (ac / pa2).toFixed(2);
			
			if ((ac / pa2).toFixed(2) < 1) document.getElementById("RL").innerHTML += " &#8211; L'empresa té problemes de liquidació."
			if ((ac / pa2).toFixed(2) > 1)
			{
				if ((ac / pa2).toFixed(2) > 2.5) document.getElementById("RL").innerHTML += " &#8211; L'empresa té un excés de recursos actius que afectarà al a rentabilitat."
				else document.getElementById("RL").innerHTML += " &#8211; L'empresa està liquidant satifactoriament."
			}
			else if (Number((ac / pa2).toFixed(2)) == 1.00)document.getElementById("RL").innerHTML += " &#8211; L'empresa està correctament."
		}

		document.getElementById("FM").innerHTML = '<b>Fons de maniobra: </b>' + (ac - pa2);
		if (ac - pa2 < 0) document.getElementById("FM").innerHTML += " &#8211; L'empresa està en una mala situació, té problemes per pagar els deutes.";
		else if (ac - pa2 > 0) document.getElementById("FM").innerHTML += " &#8211; L'empresa està en una situació de risc, dèpen dels seus clients per pagar els deutes.";
		else document.getElementById("FM").innerHTML += " &#8211; L'empresa està en situació de risc.";


		document.getElementById("TMC").innerHTML = '<b>Termini mitjà de cobrament:</b> ';
		if (vb == 0)
		{
			if (cl != 0)
				document.getElementById("TMC").innerHTML += '&#8734; &#8211; L\'empresa no cobrarà mai! D:';
			else
				document.getElementById("TMC").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("TMC").innerHTML += Math.round((cl / vb) * 365) + " dies.";
			if (cl == 0) document.getElementById("TMC").innerHTML += " &#8211; L'empresa cobrarà tots el dies! :D";
		}

		document.getElementById("TMP").innerHTML = '<b>Termini mitjà de pagament:</b> ';
		if (cb == 0)
		{
			if (pr != 0)
				document.getElementById("TMP").innerHTML += '&#8734; &#8211; L\'empresa no pagrà mai! :D';
			else
				document.getElementById("TMP").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("TMP").innerHTML += Math.round((pr / cb) * 365) + " dies.";
			if (cb.toFixed(2) == 0) document.getElementById("TMP").innerHTML += " &#8211; L'empresa pagarà tots el dies! D:";
			if (Math.round((pr / cb) * 365) > Math.round((vb / cl) * 365))
				document.getElementById("COMM").innerHTML = "Problema.";
			else
				document.getElementById("COMM").innerHTML = "Correcte.";
		}


	}