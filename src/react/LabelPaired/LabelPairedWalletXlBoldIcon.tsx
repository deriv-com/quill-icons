import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletXlBoldIcon = (
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
      <path d='M4.125 7.5h17.25q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H4.125q-.797 0-1.312.563-.563.514-.563 1.312v12.75q0 .797.563 1.313.514.562 1.312.562h15.75q.797 0 1.313-.562.562-.516.562-1.313v-8.25q0-.797-.562-1.312-.516-.563-1.313-.563H5.625q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125h14.25q1.734.047 2.906 1.219T24 16.125v8.25q-.046 1.734-1.219 2.906-1.172 1.173-2.906 1.219H4.125q-1.734-.046-2.906-1.219Q.046 26.11 0 24.375v-12.75q.047-1.734 1.219-2.906T4.125 7.5M18 21.75q-.656 0-1.078-.422-.422-.421-.422-1.078 0-.656.422-1.078.421-.422 1.078-.422t1.078.422q.422.421.422 1.078t-.422 1.078q-.421.422-1.078.422' />
    </g>
    <defs>
      <clipPath id='6be4eaca57aff16639d1cfe4a22f77d5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletXlBoldIcon);
export default ForwardRef;
