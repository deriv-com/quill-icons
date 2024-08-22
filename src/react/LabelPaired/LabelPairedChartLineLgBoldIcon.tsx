import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineLgBoldIcon = (
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
      <path d='M1.875 7.688v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.813A2.8 2.8 0 0 1 0 21.438V7.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m16.602 4.414-5.352 5.312a.856.856 0 0 1-1.29 0L8.75 14.328l-3.086 3.086c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.289l3.75-3.75c.156-.195.39-.273.664-.273.234 0 .469.078.664.273l3.086 3.086 4.648-4.648c.352-.391.938-.391 1.329 0a.92.92 0 0 1 0 1.289' />
    </g>
    <defs>
      <clipPath id='afd571a7d4f300518623111cd178fea6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgBoldIcon);
export default ForwardRef;
