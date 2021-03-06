import React from 'react';
import { determineSalary, checkType } from '../../../lib/helperFunctions';

const DescriptionHeader = ({job = {}, sector}) => {

return (
    <div className="job-details-header">
    <div className="container d-flex">
        <div className="column main">
            <h4 className="column-header label">You're interested in</h4>
            <div className="column-content primary">
                {job.jobTitle}
            </div>
            <div className="column-footer secondary">
                <strong>Salary</strong> {determineSalary(job)}
            </div>
        </div>
        <div className="column">
            <h4 className="column-header label">In or around this area</h4>
            <div className="column-content primary">
                {job.locationCity ? job.locationCity : job.locationRegion}
            </div>
            <div className="column-footer secondary ">
                <strong>Job Type</strong> {checkType(job.jobTypeId)}
            </div>
        </div>
        <div className="column">
            <h4 className="column-header label">Job reference</h4>
            <div className="column-content primary">
                {job.jobReference}
            </div>
            <div className="column-footer secondary">
                <div className="wrapper">
                    <strong>Sector</strong> {sector}
                </div>
            </div>
        </div>
        <div className="column d-md-none">
            <h4 className="column-header label">Salary</h4>
            <div className="column-content primary">
            {determineSalary(job)}
            </div>
        </div>
    </div>
</div>
)


}

export default DescriptionHeader;
