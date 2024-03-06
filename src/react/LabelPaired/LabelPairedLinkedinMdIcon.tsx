import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 5q.438 0 .719.281.28.313.281.719v12q0 .405-.281.719A.97.97 0 0 1 13 19H1a.97.97 0 0 1-.719-.281A1.04 1.04 0 0 1 0 18V6q0-.405.281-.719A.97.97 0 0 1 1 5zM4.219 17h.031v-6.687H2.156V17zM3.187 9.406q.532 0 .844-.344.344-.343.375-.843a1.3 1.3 0 0 0-.375-.875Q3.718 7 3.188 7q-.5 0-.844.344T2 8.219q0 .5.344.844t.844.343M12 17v-3.656q.063-1.375-.437-2.281-.5-.876-2.032-.907-.78 0-1.281.344-.5.312-.687.719H7.53v-.906h-2V17h2.094v-3.312q-.03-.688.188-1.188.25-.5 1.03-.531.783.062.938.594.188.561.156 1.187V17z' />
    </g>
    <defs>
      <clipPath id='81cbe9cf0bfc2fa8cc833feafd17d629__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinMdIcon);
export default ForwardRef;
