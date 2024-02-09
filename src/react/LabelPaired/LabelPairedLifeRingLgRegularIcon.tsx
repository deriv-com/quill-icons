import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m15.742 22.102-3.555-3.555q-.937.664-2.187.703-1.25-.039-2.187-.703l-3.555 3.555Q6.64 24.172 10 24.25q3.36-.078 5.742-2.148m.86-.86q2.07-2.382 2.148-5.742-.078-3.36-2.148-5.742l-3.555 3.555q.664.937.703 2.187-.039 1.25-.703 2.188zm.898.86.43.468q.39.43 0 .86-.43.39-.86 0l-.468-.43Q13.906 25.422 10 25.5q-3.906-.078-6.602-2.5l-.468.43q-.43.39-.86 0-.39-.43 0-.86l.43-.468Q.078 19.367 0 15.5q.078-3.867 2.5-6.602l-.43-.468q-.39-.43 0-.86.43-.39.86 0l.468.43Q6.133 5.578 10 5.5q3.867.078 6.602 2.5l.468-.43q.43-.39.86 0 .39.43 0 .86l-.43.468q2.422 2.696 2.5 6.602-.078 3.906-2.5 6.602M15.742 8.898Q13.36 6.828 10 6.75q-3.36.078-5.742 2.148l3.555 3.555Q8.75 11.79 10 11.75q1.25.039 2.188.703zm-8.789 8.79Q6.29 16.75 6.25 15.5q.039-1.25.703-2.187L3.398 9.758Q1.328 12.14 1.25 15.5q.078 3.36 2.148 5.742zM7.5 15.5q.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148' />
    </g>
    <defs>
      <clipPath id='6066102e03dc451c41765220f5305a84__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingLgRegularIcon);
export default ForwardRef;
