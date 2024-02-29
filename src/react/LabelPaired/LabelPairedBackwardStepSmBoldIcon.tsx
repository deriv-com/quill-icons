import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.313 6.156v2.871l4.84-3.39a.78.78 0 0 1 .464-.137q.356 0 .574.246a.73.73 0 0 1 .246.574v8.86a.73.73 0 0 1-.246.574.73.73 0 0 1-.574.246.86.86 0 0 1-.465-.137l-4.84-3.39v2.87q-.054.602-.656.657-.601-.055-.656-.656V6.157q.054-.602.656-.657.601.054.657.656m0 4.703 4.812 3.391V7.277l-4.812 3.364z' />
    </g>
    <defs>
      <clipPath id='133ebde76083edb0992b5ed93a9ad326__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmBoldIcon);
export default ForwardRef;
