import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightImageIconKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#C7E5E5' clipPath='url(#43876b0bf801355503ce93b57168604a__a)'>
      <path d='M.017 21.289c.006 1.368 1.134 2.476 2.528 2.482h18.878a2.55 2.55 0 0 0 1.808-.715 2.46 2.46 0 0 0 .752-1.767V2.71c0-.664-.27-1.3-.752-1.767a2.55 2.55 0 0 0-1.808-.716H2.5C1.122.252.017 1.357.017 2.711zm20.698.406L3.22 21.642c-.694 0-1.258-.55-1.264-1.231v-2.3l4.085-4.281 3.682 3.681a.56.56 0 0 0 .806 0l6.656-6.538L22 15.949v4.526a1.23 1.23 0 0 1-.385.872 1.28 1.28 0 0 1-.9.348M3.22 2.23h17.495c.698 0 1.264.555 1.264 1.24v9.921l-4.401-4.516a.56.56 0 0 0-.807 0l-6.645 6.496-3.67-3.585a.56.56 0 0 0-.807 0l-3.693 3.83V3.472c0-.686.566-1.241 1.264-1.241' />
      <path d='M7.402 10.094a3.5 3.5 0 0 0 3.239-2.113 3.39 3.39 0 0 0-.751-3.747 3.54 3.54 0 0 0-3.812-.75A3.435 3.435 0 0 0 3.916 6.66c0 1.893 1.56 3.43 3.486 3.435m0-5.254c1.023 0 1.852.814 1.852 1.819s-.829 1.82-1.852 1.82c-1.022 0-1.851-.815-1.851-1.82s.829-1.82 1.851-1.82' />
    </g>
    <defs>
      <clipPath id='43876b0bf801355503ce93b57168604a__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightImageIconKycIcon);
export default ForwardRef;
