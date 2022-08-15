package com.se.springmvc.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer")
public class CustomerController {
	List<Customer> list = new ArrayList<>();
	
	@RequestMapping("/showForm")
	public String showForm(Model theModel) {
		Customer customer = new Customer();
		theModel.addAttribute("customer", customer);
		return "customer-form";
	}
	
	@RequestMapping("/processForm")
	public String processForm(@ModelAttribute("customer") Customer customer, Model model) {
		list.add(customer);
		model.addAttribute("customerList", list);
		return "customer-confirmation";
	}
}
