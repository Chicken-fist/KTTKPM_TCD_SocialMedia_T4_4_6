package com.se.springmvc.demo;

import java.util.LinkedHashMap;

public class Customer {
	private String firstName;
	private String lastName;
	private String sex;
	private String email;
	private String address;
	
	private LinkedHashMap<String, String> sexOptions;
	
	
	public LinkedHashMap<String, String> getSexOptions() {
		return sexOptions;
	}
	public void setSexOptions(LinkedHashMap<String, String> sexOptions) {
		this.sexOptions = sexOptions;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Customer(String firstName, String lastName, String sex, String email, String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.sex = sex;
		this.email = email;
		this.address = address;
	}
	public Customer() {
		super();
		sexOptions = new LinkedHashMap<String, String>();
		sexOptions.put("Male", "Male");
		sexOptions.put("Female", "Female");
	}
	
	
}
