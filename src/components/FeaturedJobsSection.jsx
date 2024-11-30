import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Button } from '../components/ui';

const FeaturedJobsSection = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">Featured Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Job 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Photographer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Heyu</p>
            <p>Full Time - Permanent</p>
            <p>2 - 5 Years</p>
            <p>Gurgaon / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Marketing Manager</CardTitle>
          </CardHeader>
          <CardContent>
            <p>BrandSphere Pvt. Ltd.</p>
            <p>Full Time - Permanent</p>
            <p>4 - 6 Years</p>
            <p>Mumbai / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Senior Software Engineer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>TechNova Solutions</p>
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
            <CardTitle>Graphic Designer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>DesignCraft Studio</p>
            <p>Contract - Freelance</p>
            <p>2 - 4 Years</p>
            <p>Delhi / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 5 */}
        <Card>
          <CardHeader>
            <CardTitle>HR Specialist</CardTitle>
          </CardHeader>
          <CardContent>
            <p>GlobalReach Ltd.</p>
            <p>Part Time - Permanent</p>
            <p>3 - 5 Years</p>
            <p>Pune / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 6 */}
        <Card>
          <CardHeader>
            <CardTitle>Product Manager</CardTitle>
          </CardHeader>
          <CardContent>
            <p>InnovateHub</p>
            <p>Full Time - Onsite</p>
            <p>5 - 8 Years</p>
            <p>Bengaluru / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 7 */}
        <Card>
          <CardHeader>
            <CardTitle>Data Analyst</CardTitle>
          </CardHeader>
          <CardContent>
            <p>DataQuest Pvt. Ltd.</p>
            <p>Full Time - Permanent</p>
            <p>3 - 6 Years</p>
            <p>Hyderabad / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>

        {/* Job 8 */}
        <Card>
          <CardHeader>
            <CardTitle>Content Writer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>WriteSphere Agency</p>
            <p>Contract - Freelance</p>
            <p>2 - 4 Years</p>
            <p>Remote / India</p>
            <Button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Apply
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
