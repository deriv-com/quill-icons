import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationLgRegularIcon = (
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
      <path d='M1.328 21.945c-.078.117-.078.235-.078.352 0 .39.313.742.703.742h16.055c.39 0 .742-.352.742-.742a.63.63 0 0 0-.117-.352L10.78 8.47A.94.94 0 0 0 10 8a.95.95 0 0 0-.82.469zM.234 21.32 8.086 7.844A2.25 2.25 0 0 1 10 6.75c.742 0 1.484.43 1.875 1.094l7.852 13.476c.156.274.273.625.273.977 0 1.094-.898 1.953-1.992 1.953H1.953A1.934 1.934 0 0 1 0 22.297c0-.352.078-.703.234-.977M10 11.75c.313 0 .625.313.625.625v5A.64.64 0 0 1 10 18a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m-.937 8.75c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938' />
    </g>
    <defs>
      <clipPath id='1aa603ef39ff2777452142374d939240__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationLgRegularIcon);
export default ForwardRef;
