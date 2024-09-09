import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.188 3.75h2.625a.9.9 0 0 1 .875.875c0 .492-.41.875-.876.875h-.437v.957a5.67 5.67 0 0 1 2.707 1.203l.602-.574a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-.656.657c.574.902.93 1.968.93 3.09 0 3.144-2.57 5.687-5.688 5.687a5.683 5.683 0 0 1-5.687-5.687 5.66 5.66 0 0 1 4.812-5.606V5.5h-.437a.864.864 0 0 1-.875-.875c0-.465.382-.875.875-.875M7.156 9c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656v3.5c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656z' />
    </g>
    <defs>
      <clipPath id='2a361daa17af3f63b83942f9be2e3111__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchSmFillIcon);
export default ForwardRef;
