document.getElementById("root").append(
	FueJS.createElement(
		"div",
		{ className: "info" },
		FueJS.createElement("div", { className: "form" }, [
			FueJS.createElement(
				"div",
				{ className: "route" },
				FueJS.createElement("p", {}, "ورود")
			), // route section
			FueJS.createElement("p", {}, "ورود به حساب کاربری"),
			FueJS.createElement(
				"p",
				{},
				"جهت ورود به برنامه نام کاربری و رمز عبور را وارد کنید"
			),
			FueJS.createElement("div", { className: "inputs" }, [
				FueJS.createElement("div", { className: "input-box" }, [
					FueJS.createElement("input", {
						className: "input",
						type: "text",
						placeholder: "نام کاربری",
					}),
					FueJS.createElement("i", { className: "fa fa-user icon" }),
				]),
				FueJS.createElement("div", { className: "input-box" }, [
					FueJS.createElement("input", {
						className: "input",
						type: "text",
						placeholder: "رمز عبور",
					}),
					FueJS.createElement("i", { className: "fa fa-lock icon" }),
				]),
				FueJS.createElement("div", { className: "input-box" }, [
					FueJS.createElement("input", {
						className: "input",
						type: "text",
						placeholder: "کد امنیتی",
					}),
					FueJS.createElement("i", { className: "fa fa-key icon" }),
				]),
			]), // inputs section
			FueJS.createElement("button", { className: "button" }, "ورود"),
			FueJS.createElement(
				"div",
				{ className: "label" },
				FueJS.createElement("label", { "font-size": "13px" }, [
					FueJS.createElement("input", {
						type: "checkbox",
						style: { display: "inline" },
					}),
					"مرا به خاطر بسپار",
				])
			),
		]) // form section
	), // info section
	FueJS.createElement("div", { className: "animated" }, [
		FueJS.createElement(
			"div",
			{ className: "fading-ring" },
			FueJS.createElement("div", { className: "rings" }, [
				FueJS.createElement("div", { className: "rings ring-1" }),
				// FueJS.createElement("div", { className: "rings ring-2" }),
				// FueJS.createElement("div", { className: "rings ring-3" }),
				// FueJS.createElement("div", { className: "rings ring-4" }),
				// FueJS.createElement("div", { className: "rings ring-5" }),
			])
		), // fading rings section
		FueJS.createElement(
			"div",
			{ className: "radar" },
			FueJS.createElement("img", {
				src: "./Assets/PNG/radar-angle.png",
				alt: "",
			})
		), // radar section
		FueJS.createElement(
			"div",
			{ className: "logo" },
			FueJS.createElement("img", {
				src: "./Assets/PNG/Logo.png",
				alt: "",
			})
		), // logo section
		FueJS.createElement(
			"div",
			{ className: "footer-message" },
			FueJS.createElement("p", {}, "Multi Antivirus and Cybersecurities")
		), // footer section
	]) // animated section
);
