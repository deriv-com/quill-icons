import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEightCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.375 7.063c0 .484-.11.93-.328 1.335-.234.407-.54.735-.914.985.484.234.875.578 1.172 1.031.297.453.445.961.445 1.524-.016.796-.29 1.46-.82 1.992-.532.53-1.196.804-1.992.82H3.063c-.797-.016-1.461-.29-1.993-.82-.53-.532-.804-1.196-.82-1.992 0-.563.148-1.07.445-1.524a2.873 2.873 0 0 1 1.172-1.031 2.912 2.912 0 0 1-.914-.985 2.773 2.773 0 0 1-.328-1.335c.016-.797.29-1.461.82-1.993.532-.53 1.196-.804 1.992-.82h1.126c.796.016 1.46.29 1.992.82.53.532.804 1.196.82 1.992ZM4.562 9.874H3.063c-.579.016-1.063.219-1.454.61-.39.39-.593.874-.609 1.453.016.578.219 1.062.61 1.453.39.39.874.593 1.452.609h1.876c.578-.016 1.062-.219 1.453-.61.39-.39.593-.874.609-1.453-.016-.578-.219-1.062-.61-1.453-.39-.39-.874-.593-1.452-.609h-.375Zm0-.75c.579-.016 1.063-.219 1.454-.61.39-.39.593-.874.609-1.453-.016-.578-.219-1.062-.61-1.453-.39-.39-.874-.593-1.452-.609H3.438c-.579.016-1.063.219-1.454.61-.39.39-.593.874-.609 1.452.016.579.219 1.063.61 1.454.39.39.874.593 1.452.609h1.126Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightCaptionRegularIcon);
export default ForwardRef;
