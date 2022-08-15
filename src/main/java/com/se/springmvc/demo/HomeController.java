package com.se.springmvc.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
/* - hoặc là chạy lun file /
 * - hoặc chạy welcome-file (web.xml) -> chạy file index -> redirect: /trang-chu -> main-menu 
 */
import org.springframework.web.servlet.ModelAndView;
@Controller
public class HomeController {
	// c1:
//	@RequestMapping("/")
//	public String showMyPage() {
//		return "main-menu";
//	}

	// c2: 
	@RequestMapping(value = "/trang-chu", method = RequestMethod.GET )
	public ModelAndView showMyPage() {
		ModelAndView view = new ModelAndView("main-menu");
		return view;
	}
}
