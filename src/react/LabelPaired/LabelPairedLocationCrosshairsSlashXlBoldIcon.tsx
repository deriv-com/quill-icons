import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.828 6.234 6.844 5.391q2.109-2.11 5.203-2.531V7.125Q13.97 6.095 15 6q1.032.095 1.125 1.125v1.969q3.094.422 5.25 2.531 2.11 2.157 2.578 5.25h1.922Q26.907 16.969 27 18q-.093 1.032-1.125 1.125h-1.922a9.6 9.6 0 0 1-1.219 3.516l6.844 5.343q.75.704.188 1.594-.704.75-1.594.188L.422 8.016q-.75-.704-.188-1.594.704-.75 1.594-.188m8.625 6.797 1.828 1.406q1.125-.89 2.719-.937 1.922.047 3.188 1.313Q19.452 16.078 19.5 18a4.45 4.45 0 0 1-.375 1.828l1.828 1.406q.797-1.453.797-3.234-.094-2.86-1.969-4.781Q17.86 11.344 15 11.25q-2.672.047-4.547 1.781m6.797 5.297h-.047q.047-.187.047-.328a2.45 2.45 0 0 0-.656-1.594A2.45 2.45 0 0 0 15 15.75a2.4 2.4 0 0 0-.844.14zm2.203 7.5a9.8 9.8 0 0 1-3.328 1.125v1.922Q16.032 29.907 15 30q-1.03-.093-1.125-1.125v-1.922q-3.093-.468-5.25-2.578-2.11-2.109-2.531-5.25H4.125Q3.095 19.032 3 18q.095-1.03 1.125-1.125h1.969q.047-.703.281-1.36l1.922 1.547A9 9 0 0 0 8.25 18q.094 2.86 1.969 4.781Q12.14 24.704 15 24.75q1.313 0 2.484-.469z' />
    </g>
    <defs>
      <clipPath id='bb36d4a93474e5d30a75b36d1b21a309__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashXlBoldIcon);
export default ForwardRef;
