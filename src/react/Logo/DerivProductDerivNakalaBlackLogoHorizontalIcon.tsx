import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivNakalaBlackLogoHorizontalIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 72 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#414652'
      d='M0 13.5C0 6.044 6.044 0 13.5 0h45C65.956 0 72 6.044 72 13.5v45C72 65.956 65.956 72 58.5 72h-45C6.044 72 0 65.956 0 58.5z'
    />
    <path
      fill='#303541'
      d='M13.5 0C6.044 0 0 6.044 0 13.5v.392L67.308 3.268A13.45 13.45 0 0 0 58.5 0zM68.697 4.652 56.35 72h2.15C65.956 72 72 65.956 72 58.5v-45c0-3.384-1.246-6.478-3.303-8.848'
    />
    <path
      fill='#FF444F'
      d='M21.794 42.406q.323.03.732.058h1.023q3.423 0 5.06-1.725 1.668-1.726 1.668-4.768 0-3.188-1.58-4.826-1.58-1.64-5.001-1.639-.468 0-.966.03-.497 0-.936.058zm13.192-6.435q0 2.633-.819 4.592-.819 1.96-2.34 3.247-1.491 1.287-3.656 1.93-2.165.645-4.856.644-1.228 0-2.866-.117a22 22 0 0 1-3.218-.41V26.114a25 25 0 0 1 3.276-.38 45 45 0 0 1 2.955-.118q2.603 0 4.709.585 2.135.585 3.656 1.843 1.521 1.257 2.34 3.218.82 1.96.82 4.709M50.936 46.12a102 102 0 0 0-4.24-6.873 70 70 0 0 0-4.856-6.406v13.28h-4.505V25.85h3.715a36 36 0 0 1 2.135 2.369q1.17 1.404 2.37 3.012a76 76 0 0 1 2.427 3.306q1.2 1.696 2.252 3.276V25.85h4.534v20.27z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivNakalaBlackLogoHorizontalIcon);
export default ForwardRef;
