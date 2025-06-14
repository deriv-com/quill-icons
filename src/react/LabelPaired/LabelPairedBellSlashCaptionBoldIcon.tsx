import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.89 3.64 3.47 2.696c.538-.82 1.382-1.43 2.39-1.617V4.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75v.469c1.71.328 3 1.851 3 3.656v.61c0 1.054.352 2.085 1.008 2.93l.351.42c.118.165.164.376.094.54l2.063 1.64c.257.188.304.54.093.774a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m4.36 3.4 5.297 4.148a5.8 5.8 0 0 1-.422-2.204v-.609c0-1.43-1.195-2.625-2.625-2.625a2.59 2.59 0 0 0-2.25 1.29m4.266 6.21H2.813a.56.56 0 0 1-.516-.305.58.58 0 0 1 .07-.61l.352-.42c.656-.845 1.031-1.876 1.031-2.93v-.258l1.078.843a5.75 5.75 0 0 1-.89 2.555h4.148zM9 14c0 .398-.164.797-.445 1.078A1.47 1.47 0 0 1 7.5 15.5c-.398 0-.797-.14-1.078-.422S6 14.398 6 14h3' />
    </g>
    <defs>
      <clipPath id='c00972a5e00e56403680fba29eb0a5dd__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashCaptionBoldIcon);
export default ForwardRef;
