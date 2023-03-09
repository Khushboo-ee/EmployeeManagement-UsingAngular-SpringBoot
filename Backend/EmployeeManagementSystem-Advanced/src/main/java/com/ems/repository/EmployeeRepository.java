package com.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ems.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	/*
	 * save() for new row and modify existing row
	 * findAll() = to get all rows
	 * findById() :-  to get specific row based id
	 * deleteById() :- to delete a row based on Id
	 */
}
