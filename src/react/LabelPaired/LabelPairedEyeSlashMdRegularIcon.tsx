import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.813 4.094 19 15.031q.343.312.093.688-.343.343-.718.093l-19-15q-.344-.343-.094-.718.344-.313.719-.094m18.125 8.281q-.5 1.22-1.688 2.781l-.781-.594Q17.563 13.094 18 12q-.312-.781-.969-1.781a13 13 0 0 0-1.687-1.969A9.1 9.1 0 0 0 13 6.656Q11.656 6.032 10 6q-1.875.03-3.344.813l-.843-.657Q7.593 5.063 10 5q1.906.03 3.406.75t2.625 1.781q1.095 1.032 1.813 2.125.718 1.095 1.093 1.969.126.375 0 .75M2.75 8.844l.813.625Q2.438 10.906 2 12q.312.781.969 1.781.687 1 1.687 1.969A9.1 9.1 0 0 0 7 17.344q1.344.624 3 .656 1.875-.031 3.344-.812l.844.656Q12.406 18.937 10 19q-1.905-.03-3.406-.75A9.7 9.7 0 0 1 4 16.469q-1.125-1.032-1.844-2.125-.718-1.095-1.062-1.969a.94.94 0 0 1 0-.75q.468-1.219 1.656-2.781M10 16q-1.687-.031-2.844-1.187Q6.031 13.688 6 12q0-.312.031-.594l.969.781q.094 1.188.938 2 .844.781 2.062.813.25 0 .531-.031l.938.75A3.8 3.8 0 0 1 10 16m4-4q0 .312-.031.594L13 11.813a3.02 3.02 0 0 0-.937-2Q11.219 9.032 10 9q-.25 0-.5.063l-.969-.782A3.8 3.8 0 0 1 10 8q1.688.03 2.844 1.156Q13.969 10.312 14 12' />
    </g>
    <defs>
      <clipPath id='46bb92e069ae0a2604e990d510c4f7a3__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashMdRegularIcon);
export default ForwardRef;
