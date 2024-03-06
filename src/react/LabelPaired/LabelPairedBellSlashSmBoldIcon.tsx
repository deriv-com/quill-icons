import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.316 3.887 3.965 3.117q.985-1.56 2.844-1.887v-.492q0-.383.246-.629A.85.85 0 0 1 9 3.75q.383 0 .629.246a.85.85 0 0 1 .246.629v.492q1.53.273 2.488 1.395.985 1.121 1.012 2.707v.902a5.54 5.54 0 0 0 1.203 3.418l.41.52q.22.3.11.629l2.406 1.886q.438.411.11.93-.411.438-.93.11L.496 4.925q-.437-.411-.11-.93.411-.437.93-.11m5.004 3.91 6.262 4.922a6.6 6.6 0 0 1-.52-2.598V9.22q-.027-1.203-.82-2.024-.82-.792-2.023-.82H8.78q-.792 0-1.449.383-.656.41-1.012 1.039m5.032 7.328h-7.82a.7.7 0 0 1-.602-.383.71.71 0 0 1 .082-.683l.41-.52a5.5 5.5 0 0 0 1.203-3.39V9.82l1.285 1.012a7 7 0 0 1-1.066 2.98h4.84zM10.75 16q0 .711-.52 1.23-.519.52-1.23.52t-1.23-.52A1.68 1.68 0 0 1 7.25 16h3.5' />
    </g>
    <defs>
      <clipPath id='15a55ca53b0b193f8ad13450a360f4ae__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashSmBoldIcon);
export default ForwardRef;
