import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.02 15.371 8.53 12.883q-.656.465-1.531.492-.875-.027-1.531-.492L2.98 15.37Q4.648 16.82 7 16.875q2.352-.055 4.02-1.504m.601-.601q1.449-1.668 1.504-4.02-.055-2.352-1.504-4.02L9.133 9.22q.465.656.492 1.531-.027.875-.492 1.531zm.629.601.3.328q.274.3 0 .602-.3.273-.6 0L11.62 16Q9.734 17.695 7 17.75 4.266 17.695 2.379 16l-.328.3q-.3.274-.602 0-.273-.3 0-.6l.301-.329Q.055 13.457 0 10.75q.054-2.707 1.75-4.621l-.3-.328q-.274-.3 0-.602.3-.273.6 0l.329.301Q4.293 3.805 7 3.75q2.707.054 4.621 1.75l.328-.3q.3-.274.602 0 .273.3 0 .6l-.301.329Q13.945 8.016 14 10.75q-.055 2.734-1.75 4.621M11.02 6.13Q9.352 4.679 7 4.625q-2.352.054-4.02 1.504L5.47 8.617Q6.125 8.152 7 8.125q.875.027 1.531.492zM4.867 12.28q-.465-.656-.492-1.531.027-.875.492-1.531L2.38 6.73Q.929 8.398.875 10.75q.054 2.352 1.504 4.02zm.383-1.531q.027.985.875 1.504.875.492 1.75 0 .848-.52.875-1.504-.027-.985-.875-1.504-.875-.492-1.75 0-.848.52-.875 1.504' />
    </g>
    <defs>
      <clipPath id='b753c57ef1d68b900380021942f3e08b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingSmRegularIcon);
export default ForwardRef;
