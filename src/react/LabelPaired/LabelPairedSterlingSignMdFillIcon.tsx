import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.5 9.031V11H7c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3.5v1.406c0 .906-.25 1.781-.719 2.563L2.75 17H9c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.375 0-.719-.187-.875-.5a.96.96 0 0 1 0-1l.938-1.562c.28-.47.437-1 .437-1.532V13H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.5V9.031C1.5 6.812 3.281 5 5.5 5c.438 0 .844.094 1.281.219l2.532.843a1 1 0 0 1 .624 1.282c-.187.5-.75.781-1.25.625l-2.562-.844A2 2 0 0 0 5.5 7c-1.125 0-2 .906-2 2.031' />
    </g>
    <defs>
      <clipPath id='dbb5aaf0bfc55204046fe9db4299da81__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignMdFillIcon);
export default ForwardRef;
