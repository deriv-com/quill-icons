import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BrandDerivWordmarkSlateIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 217 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fill='#414652'
        d='m43.472 2.271-3.715 21.06H26.86c-12.03 0-23.498 9.744-25.623 21.77l-.9 5.118C-1.777 62.246 6.25 71.99 18.281 71.99h10.755c8.768 0 17.122-7.095 18.664-15.86L57.605 0zm-9.15 51.872c-.475 2.707-2.914 4.911-5.622 4.911h-6.534c-5.408 0-9.026-4.388-8.077-9.803l.564-3.192c.958-5.405 6.119-9.803 11.526-9.803h11.298zm108.463 17.845 8.462-47.986h13.385l-8.462 47.986zm1.448-47.433q-1.008 5.709-2.016 11.419c-6.341-1.97-12.883-1.343-14.893-.942Q124.066 53.516 120.806 72h-13.394l8.032-45.52c4.357-1.803 15.055-5.462 28.789-1.925m-54.27-1.232h-10.42c-10.152 0-19.83 8.221-21.619 18.37L55.819 53.62C54.029 63.77 60.8 71.99 70.954 71.99h22.163l2.273-12.895H74.562c-3.38 0-5.644-2.737-5.041-6.127l.07-.405h33.58l1.918-10.87c1.789-10.149-4.982-18.37-15.135-18.37zm1.69 17.342-.079.692H71.606l.109-.613c.602-3.38 3.687-6.354 7.077-6.354h7.8c3.351 0 5.615 2.925 5.061 6.275m111.81-16.663h13.394c-4.563 12.126-15.019 32.755-25.149 47.986h-13.394c-4.65-14.496-7.653-34.695-8.225-47.986h13.395c.241 4.335 2.183 20.417 4.399 31.651 6.077-10.93 12.777-25.269 15.569-31.651z'
      />
    </g>
    <defs>
      <clipPath id='8bf8637f1956db03a01c823397ab0c0d__a'>
        <path fill='#fff' d='M0 0h217v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(BrandDerivWordmarkSlateIcon);
export default ForwardRef;
