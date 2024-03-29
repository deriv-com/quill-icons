import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenMdBoldIcon = (
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
      <path d='M1.125 15.281c.125-.437.375-.844.688-1.156l9.5-9.5a2.02 2.02 0 0 1 2.843 0l1.219 1.219c.094.093.188.218.25.312a1.994 1.994 0 0 1-.25 2.532l-9.5 9.5c-.031.03-.094.062-.125.125a3.3 3.3 0 0 1-1.031.562l-2.438.719L.937 20a.71.71 0 0 1-.718-.219.64.64 0 0 1-.188-.718l.375-1.344zm1.438.438-.22.719-.5 1.718 1.72-.5.718-.218c.219-.063.375-.157.532-.313l7.156-7.156L10.03 8.03l-7.156 7.156c-.031 0-.031.032-.062.063-.126.125-.188.281-.25.469' />
    </g>
    <defs>
      <clipPath id='393827fcab87df124f8ca549f6416c4f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenMdBoldIcon);
export default ForwardRef;
