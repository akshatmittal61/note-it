import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import Accordian from "./Accordian/Accordian";
import _ from "lodash";

const Navigation = ({ closeNav }) => {
	const { axiosInstance } = useContext(GlobalContext);
	const [lists, setLists] = useState([]);
	useEffect(() => {
		axiosInstance.get("/api/lists").then((res) => setLists(res.data));
	}, []);
	return (
		<div className="nav-frame">
			<div className="nav-box" data-aos="fade-right">
				<div className="nav-head">
					<div className="nav-head-content">
						<span className="nav-head-content__text">
							Main Menu
						</span>
					</div>
					<div className="nav-head-close">
						<button
							className="nav-head-close__button icon icon-sm"
							onClick={closeNav}
						>
							<span className="material-icons">close</span>
						</button>
					</div>
				</div>
				<div className="nav-body">
					<div className="nav-body-content">
						<Link to="/" className="nav-body-content-link">
							<div className="nav-body-content-link__icon">
								<span className="material-icons">note_alt</span>
							</div>
							<div className="nav-body-content-link__content">
								All Notes
							</div>
						</Link>
					</div>
					<div className="nav-body-content">
						<Accordian
							summary={
								<>
									<div className="nav-body-content-head">
										<div className="nav-body-content-head__icon">
											<span className="material-icons">
                                            list
											</span>
										</div>
										<div
											className="nav-body-content-head__content"
											style={{ padding: "0.3rem" }}
										>
											Lists
										</div>
									</div>
								</>
							}
							details={lists.map((list, index) => (
								<Link
									to={`/${_.kebabCase(list)}`}
									className="nav-body-content-link"
									key={index}
								>
									<div className="nav-body-content-link__icon">
										<span className="material-icons">
											subdirectory_arrow_right
										</span>
									</div>
									<div className="nav-body-content-link__content">
										{list}
									</div>
								</Link>
							))}
						/>
					</div>
					<div className="nav-body-content">
						<Link to="/archive" className="nav-body-content-link">
							<div className="nav-body-content-link__icon">
								<span className="material-icons">archive</span>
							</div>
							<div className="nav-body-content-link__content">
								Archive
							</div>
						</Link>
					</div>
					<div className="nav-body-content">
						<Link to="/trash" className="nav-body-content-link">
							<div className="nav-body-content-link__icon">
								<span className="material-icons">delete</span>
							</div>
							<div className="nav-body-content-link__content">
								Trash
							</div>
						</Link>
					</div>
					<div className="nav-body-content">
						<Link to="/about" className="nav-body-content-link">
							<div className="nav-body-content-link__icon">
								<span className="material-icons">
									info
								</span>
							</div>
							<div className="nav-body-content-link__content">
								About
							</div>
						</Link>
					</div>
					<div className="nav-body-content">
						<Link to="/contact" className="nav-body-content-link">
							<div className="nav-body-content-link__icon">
								<span className="material-icons">
								contact_support
								</span>
							</div>
							<div className="nav-body-content-link__content">
								Contact Us
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
