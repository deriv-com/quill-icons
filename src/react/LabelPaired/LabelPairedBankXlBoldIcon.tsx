import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.563 6.14 23.156 12q.798.469.844 1.406 0 .657-.469 1.125a1.53 1.53 0 0 1-1.125.469H1.594q-.657 0-1.125-.469A1.53 1.53 0 0 1 0 13.406Q.047 12.468.844 12l10.594-5.86q.562-.28 1.124 0m-1.876 6.61A1.5 1.5 0 0 1 10.5 12q0-.656.422-1.078.421-.422 1.078-.422t1.078.422q.422.421.422 1.078 0 .422-.187.75h6.562L12 8.39l-7.875 4.36zM3 16.5h2.25V24h3v-7.5h2.25V24h3v-7.5h2.25V24h3v-7.5H21V24h.375q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H3q-1.03-.093-1.125-1.125Q1.97 24.095 3 24zM1.5 27.75h21.375q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H1.5Q.47 29.907.375 28.875.47 27.845 1.5 27.75' />
    </g>
    <defs>
      <clipPath id='8bde6e77edb7d002e008a641106ad1b8__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankXlBoldIcon);
export default ForwardRef;
