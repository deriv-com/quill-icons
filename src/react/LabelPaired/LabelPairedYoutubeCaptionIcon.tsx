import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedYoutubeCaptionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.14 6.406c.079.36.141.774.188 1.242.031.485.055.915.07 1.29V10.085c-.015.375-.039.797-.07 1.266-.047.484-.11.906-.187 1.265-.188.578-.57.953-1.149 1.125-.375.078-.953.14-1.734.188-.781.03-1.508.054-2.18.07H5.922a131.2 131.2 0 0 1-2.18-.07c-.781-.047-1.36-.11-1.734-.188-.578-.172-.961-.547-1.149-1.125-.078-.36-.14-.781-.187-1.265a51.36 51.36 0 0 1-.07-1.266V8.937c.015-.374.039-.804.07-1.289.047-.468.11-.882.187-1.242.188-.578.57-.96 1.149-1.148.375-.078.953-.14 1.734-.188A130.88 130.88 0 0 1 5.922 5h2.156c.672.016 1.399.04 2.18.07.781.047 1.36.11 1.734.188.578.187.961.57 1.149 1.148Zm-7.453 5.016L9.04 9.5 5.688 7.602v3.82Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeCaptionIcon);
export default ForwardRef;
