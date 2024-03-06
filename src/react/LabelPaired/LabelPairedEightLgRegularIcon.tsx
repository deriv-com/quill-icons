import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.125 11.438q0 1.21-.547 2.226a4.85 4.85 0 0 1-1.523 1.64q1.21.586 1.953 1.72.742 1.132.742 2.538-.04 1.993-1.367 3.32-1.328 1.329-3.32 1.368H4.937q-1.992-.04-3.32-1.367Q.29 21.554.25 19.563q0-1.406.742-2.54a4.8 4.8 0 0 1 1.953-1.718 4.85 4.85 0 0 1-1.523-1.64 4.6 4.6 0 0 1-.547-2.227q.04-1.993 1.367-3.32 1.329-1.329 3.32-1.368h1.875q1.993.04 3.32 1.367 1.329 1.329 1.368 3.32m-4.687 4.687h-2.5q-1.446.04-2.422 1.016-.977.975-1.016 2.422.04 1.445 1.016 2.421.975.977 2.422 1.016h3.125q1.444-.04 2.421-1.016.977-.975 1.016-2.422-.04-1.445-1.016-2.421-.976-.977-2.421-1.016zm0-1.25q1.444-.04 2.421-1.016t1.016-2.421q-.04-1.446-1.016-2.422T7.438 8H5.563q-1.446.04-2.422 1.016t-1.016 2.422q.04 1.444 1.016 2.421t2.422 1.016z' />
    </g>
    <defs>
      <clipPath id='7a72eea285e47800938e72d48362fad1__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightLgRegularIcon);
export default ForwardRef;
