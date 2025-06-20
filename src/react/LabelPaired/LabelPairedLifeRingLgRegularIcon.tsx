import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m15.703 22.14-3.555-3.554A3.78 3.78 0 0 1 10 19.25a3.8 3.8 0 0 1-2.187-.664L4.258 22.14C5.78 23.469 7.773 24.25 10 24.25c2.188 0 4.18-.781 5.703-2.11m.899-.898A8.68 8.68 0 0 0 18.75 15.5c0-2.187-.82-4.18-2.148-5.703l-3.555 3.555c.43.625.703 1.367.703 2.148 0 .82-.273 1.563-.703 2.188zm.898.899.43.43a.66.66 0 0 1 0 .898.66.66 0 0 1-.899 0l-.43-.469A9.88 9.88 0 0 1 10 25.5 9.98 9.98 0 0 1 3.36 23l-.43.469a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l.469-.43A9.98 9.98 0 0 1 0 15.5c0-2.5.938-4.844 2.5-6.602l-.469-.43a.66.66 0 0 1 0-.898.66.66 0 0 1 .899 0l.43.43C5.116 6.477 7.46 5.5 10 5.5c2.5 0 4.844.977 6.602 2.5l.43-.43a.66.66 0 0 1 .898 0 .66.66 0 0 1 0 .899l-.43.43C19.023 10.655 20 12.96 20 15.5c0 2.54-.977 4.883-2.5 6.64M15.703 8.898A8.66 8.66 0 0 0 10 6.75c-2.227 0-4.219.82-5.742 2.148l3.555 3.555c.625-.43 1.367-.703 2.187-.703.781 0 1.523.273 2.148.703zm-8.789 8.79A3.8 3.8 0 0 1 6.25 15.5c0-.781.234-1.523.664-2.148L3.36 9.797C2.031 11.32 1.25 13.312 1.25 15.5c0 2.227.781 4.219 2.11 5.742zM7.5 15.5a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148' />
    </g>
    <defs>
      <clipPath id='43a0bdd4e4dcc6030e6cc36320331b1a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingLgRegularIcon);
export default ForwardRef;
