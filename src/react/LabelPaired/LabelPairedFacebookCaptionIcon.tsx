import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFacebookCaptionIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.813 9.5c-.032 1.484-.5 2.75-1.407 3.797-.906 1.047-2.07 1.695-3.492 1.945v-4.055h1.36L8.53 9.5H6.914V8.398a.84.84 0 0 1 .188-.609c.14-.187.39-.281.75-.281h.726v-1.43c-.015-.016-.148-.039-.398-.07a7.674 7.674 0 0 0-.89-.047c-.673 0-1.204.195-1.595.586-.39.39-.593.945-.61 1.664V9.5H3.61v1.688h1.477v4.054c-1.422-.25-2.586-.898-3.492-1.945C.687 12.25.219 10.984.187 9.5.204 8.422.47 7.445.985 6.57A5.803 5.803 0 0 1 3.07 4.484c.875-.515 1.852-.78 2.93-.796 1.078.015 2.055.28 2.93.796a5.802 5.802 0 0 1 2.086 2.086c.515.875.78 1.852.796 2.93Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookCaptionIcon);
export default ForwardRef;
