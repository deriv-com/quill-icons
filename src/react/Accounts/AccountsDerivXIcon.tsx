import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDerivXIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#ce8877ca4c5b3ce62adb4a947137fe7e__a)'>
      <path
        fill='#FF444F'
        d='M0 6a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z'
      />
      <path
        fill='#E12E3A'
        d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM30.532 2.068 25.044 32H26a6 6 0 0 0 6-6V6c0-1.504-.553-2.88-1.468-3.932'
      />
      <path
        fill='#fff'
        d='M9.544 19.066q.155.015.35.028h.49q1.639 0 2.422-.826.798-.825.798-2.282 0-1.525-.756-2.31-.756-.784-2.394-.784a8 8 0 0 0-.462.014q-.238 0-.448.028zm6.314-3.08q0 1.26-.392 2.198a4.04 4.04 0 0 1-1.12 1.554q-.714.616-1.75.924-1.035.308-2.324.308-.588 0-1.372-.056a10.5 10.5 0 0 1-1.54-.196v-9.45a12 12 0 0 1 1.568-.182 21 21 0 0 1 1.414-.056q1.246 0 2.254.28 1.023.28 1.75.882a3.9 3.9 0 0 1 1.12 1.54q.393.938.392 2.254'
      />
      <path
        fill='#fff'
        d='M22.021 20.844a26 26 0 0 0-.896-1.638 18 18 0 0 0-1.106-1.708q-.195.252-.504.7-.293.448-.602.952-.294.504-.56.966t-.392.728H15.47q.616-1.134 1.428-2.38.826-1.246 1.834-2.646l-3.122-4.676h2.646l1.89 3.024 1.848-3.024h2.492l-3.08 4.704a33 33 0 0 1 1.974 2.828q.798 1.288 1.26 2.17z'
      />
    </g>
    <defs>
      <clipPath id='ce8877ca4c5b3ce62adb4a947137fe7e__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(AccountsDerivXIcon);
export default ForwardRef;
