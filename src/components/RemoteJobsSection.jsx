import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Button } from '../components/ui';

const RemoteJobsSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">Remote Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Job 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Java Full Stack Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>HireBloc Ventures Pvt. Ltd.</p>
            <p>Full Time - Permanent</p>
            <p>4 - 6 Years</p>
            <p>Bengaluru / Bangalore / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 2 */}
        <Card>
          <CardHeader>
            <CardTitle>React Frontend Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>TechHive Solutions</p>
            <p>Contract - Remote</p>
            <p>2 - 4 Years</p>
            <p>Remote / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Senior Backend Engineer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Innovative Tech</p>
            <p>Full Time - Remote</p>
            <p>5+ Years</p>
            <p>Anywhere / Remote</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 4 */}
        <Card>
          <CardHeader>
            <CardTitle>UI/UX Designer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>DesignWorks Inc.</p>
            <p>Part Time - Remote</p>
            <p>3 - 5 Years</p>
            <p>Delhi / Remote / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 5 */}
        <Card>
          <CardHeader>
            <CardTitle>DevOps Engineer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>CloudMasters Pvt. Ltd.</p>
            <p>Full Time - Permanent</p>
            <p>3 - 6 Years</p>
            <p>Mumbai / Remote</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 6 */}
        <Card>
          <CardHeader>
            <CardTitle>Data Scientist</CardTitle>
          </CardHeader>
          <CardContent>
            <p>DataWorks AI Solutions</p>
            <p>Full Time - Remote</p>
            <p>2 - 5 Years</p>
            <p>Hyderabad / Remote</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>React Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>DataWorks AI Solutions</p>
            <p>Full Time - Remote</p>
            <p>2 - 5 Years</p>
            <p>Hyderabad / Remote</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Scientist</CardTitle>
          </CardHeader>
          <CardContent>
            <p>DataFlow AI Solutions</p>
            <p>Full Time - Remote</p>
            <p>1 - 5 Years</p>
            <p>Hyderabad / Remote</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RemoteJobsSection;
