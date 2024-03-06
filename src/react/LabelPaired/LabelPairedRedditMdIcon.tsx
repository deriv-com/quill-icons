import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.313 13.563q-.72-.094-.782-.782.062-.719.782-.781.687.063.75.781-.063.688-.75.781M15.75 12q-.03 2.157-1.062 3.906a7.74 7.74 0 0 1-2.782 2.781Q10.156 19.72 8 19.75q-2.156-.03-3.906-1.062a7.74 7.74 0 0 1-2.782-2.782Q.283 14.156.25 12q.03-2.156 1.063-3.906a7.74 7.74 0 0 1 2.78-2.781Q5.845 4.28 8 4.25q2.157.03 3.906 1.063a7.74 7.74 0 0 1 2.781 2.78Q15.72 9.845 15.75 12m-4.125-1.281q-.468 0-.75.312-1.094-.75-2.687-.844l.53-2.437 1.75.375q.063.72.75.781.72-.062.782-.781-.063-.72-.781-.781a.79.79 0 0 0-.688.437l-1.906-.437q-.156 0-.219.156l-.594 2.688q-1.593.093-2.687.843-.28-.312-.75-.312-.813.062-1 .781-.157.72.563 1.188a1.7 1.7 0 0 0-.063.468q.063 1.281 1.219 2.094 1.156.844 2.906.875 1.75-.03 2.938-.875 1.156-.813 1.218-2.094 0-.25-.062-.5.687-.437.531-1.156-.187-.72-1-.781m-2.156 3.625q-.5.437-1.469.437-.968-.03-1.469-.437-.124-.095-.25 0-.125.156 0 .281.625.531 1.719.531t1.719-.531q.125-.125 0-.281-.126-.095-.25 0M9.719 12q-.72.063-.781.781.062.688.78.781.69-.093.75-.78-.06-.72-.75-.782' />
    </g>
    <defs>
      <clipPath id='5b9b3ab7954a5541c33722effa389a39__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditMdIcon);
export default ForwardRef;
