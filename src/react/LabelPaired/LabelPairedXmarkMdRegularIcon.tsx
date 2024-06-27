import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.125 16.875 6 12.719l-4.156 4.156c-.188.188-.5.188-.719 0-.187-.219-.187-.531 0-.719L5.281 12 1.125 7.875c-.187-.187-.187-.5 0-.719.219-.187.531-.187.719 0L6 11.313l4.125-4.157c.188-.187.5-.187.719 0 .187.219.187.532 0 .719L6.688 12l4.156 4.156c.187.188.187.5 0 .719-.219.188-.531.188-.719 0' />
    </g>
    <defs>
      <clipPath id='c2f19fcc45908ce945b96a4552e75a4a__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkMdRegularIcon);
export default ForwardRef;
