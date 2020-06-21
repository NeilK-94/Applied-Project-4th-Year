// import React, { useState, useEffect } from "react";
// import JobDataService from "../service/JobDataService";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import AuthenticationService from "../service/AuthenticationService";

// export const UpdateJobComponent1 = (props) => {
//   const [id] = useState(props.match.params.id);
//   const [employer] = useState(props.match.employer);
//   const [description, setDescription] = useState("");
//   const [job, setJobs] = useState([]);

//   useEffect(() => {
//     if ({ id } === -1) {
//       console.log("Not mounting, (Create job)");
//       return;
//     }
//     let username = AuthenticationService.getLoggedUser();

//     JobDataService.retrieveJob(username, { id })
//       .then((response) => {
//         setJobs([
//           ...job,
//           {
//             id: response.data.id,
//             employer: response.data.employer,
//             jobTitle: response.data.jobTitle,
//             description: response.data.description,
//             employer: response.data.employer,
//           },
//         ]);
//       })
//       .catch(() => {
//         console.log("Failed to get job");
//       });
//   }, []);

//   //    Error handling for form
//   const validate = (values) => {
//     let errors = {};
//     if (!values.description) {
//       errors.description = "Enter a description";
//     } else if (values.description.length < 5) {
//       errors.description = "Description must be at least 5 characters long";
//     }
//     if (!values.jobTitle) {
//       errors.jobTitle = "Enter a job title";
//     }
//     if (!values.employer) {
//       errors.employer = "Enter an employer";
//     }
//     return errors;
//   };

//   //    When save is clicked
//   const onSubmit = (values) => {
//     let job = {
//       id: this.state.id,
//       employer: values.employer,
//       jobTitle: values.jobTitle,
//       description: values.description,
//       county: values.county,
//     };

//     if (this.state.id === -1) {
//       JobDataService.createJob(
//         job.jobTitle,
//         job.employer,
//         this.state.id,
//         job
//       ).then(() => this.props.history.push("/jobs"));
//     } else {
//       JobDataService.updateJob(
//         job.jobTitle,
//         job.employer,
//         this.state.id,
//         job
//       ).then(() => this.props.history.push("/jobs"));
//     }
//   };
//   //    Go back in the router
//   const backButton = () => {
//     this.props.history.goBack();
//   };
//   let { county, jobTitle } = job;

//   return (
//     <div>
//       <h3>
//         Update {employer}'s {jobTitle} Job
//       </h3>
//       <div className="container">
//         <Formik
//           initialValues={{ county, description, employer, jobTitle }}
//           onSubmit={onSubmit}
//           validateOnChange={false}
//           validateOnBlur={false}
//           validate={validate}
//           enableReinitialize={true}
//         >
//           {(props) => (
//             <Form>
//               <ErrorMessage
//                 name="description"
//                 component="div"
//                 className="alert alert-warning"
//               />
//               <fieldset className="form-group">
//                 <label>Employer</label>
//                 <Field className="form-control" type="text" name="employer" />
//               </fieldset>
//               <fieldset className="form-group">
//                 <label>Job Title</label>
//                 <Field className="form-control" type="text" name="jobTitle" />
//               </fieldset>
//               <fieldset className="form-group">
//                 <label>Location</label>
//                 <Field className="form-control" type="text" name="county" />
//               </fieldset>
//               <fieldset className="form-group">
//                 <label>Description</label>
//                 <Field
//                   className="form-control"
//                   type="text"
//                   name="description"
//                 />
//               </fieldset>
//               <div
//                 className="btn-toolbar"
//                 role="toolbar"
//                 aria-label="Toolbar with button groups"
//               >
//                 <div
//                   className="btn-group mr-2"
//                   role="group"
//                   aria-label="First group"
//                 >
//                   <button className="btn btn-success" type="submit">
//                     Save
//                   </button>
//                 </div>
//                 <div
//                   className="btn-group mr-2"
//                   role="group"
//                   aria-label="Second group"
//                 >
//                   <button
//                     className="btn btn-sm"
//                     type="back  "
//                     onClick={backButton}
//                   >
//                     Back
//                   </button>
//                 </div>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default UpdateJobComponent1;
