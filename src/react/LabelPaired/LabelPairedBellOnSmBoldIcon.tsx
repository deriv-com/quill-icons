import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnSmBoldIcon = (
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
      <path d='M9 3.75q.383 0 .629.246a.85.85 0 0 1 .246.629v.492q1.53.273 2.488 1.395.985 1.121 1.012 2.707v.902a5.54 5.54 0 0 0 1.203 3.418l.41.52a.71.71 0 0 1 .082.683.7.7 0 0 1-.601.383H3.53a.7.7 0 0 1-.601-.383.71.71 0 0 1 .082-.683l.41-.52a5.54 5.54 0 0 0 1.203-3.418V9.22q.027-1.587 1.012-2.707.957-1.122 2.488-1.395v-.492q0-.383.246-.629A.85.85 0 0 1 9 3.75m0 2.625h-.219q-1.203.027-2.023.82-.793.82-.82 2.024v.902a6.6 6.6 0 0 1-1.094 3.691h8.312a6.9 6.9 0 0 1-1.094-3.69v-.903q-.027-1.203-.82-2.024-.82-.792-2.023-.82zM10.75 16q0 .711-.52 1.23-.519.52-1.23.52t-1.23-.52A1.68 1.68 0 0 1 7.25 16h3.5M.25 9.219q.054-.602.656-.656h2.188q.601.054.656.656-.054.601-.656.656H.906Q.305 9.821.25 9.219m14.656-.656h2.188q.601.054.656.656-.055.601-.656.656h-2.188q-.601-.054-.656-.656.055-.602.656-.656m1.696-4.239q.218.575-.301.903l-1.75.875q-.575.218-.875-.301-.219-.575.273-.875l1.75-.875q.574-.219.903.273m-14.903.903q-.493-.33-.273-.903.3-.492.875-.273l1.75.875q.492.3.3.875-.327.492-.902.3z' />
    </g>
    <defs>
      <clipPath id='c39ddcc37d0e8aba876daad64cbffe6f__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnSmBoldIcon);
export default ForwardRef;
