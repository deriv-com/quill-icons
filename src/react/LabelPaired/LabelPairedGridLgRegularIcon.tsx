import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 8H1.812a.31.31 0 0 0-.312.313v1.874c0 .196.117.313.313.313h1.875A.31.31 0 0 0 4 10.188V8.312A.336.336 0 0 0 3.688 8M1.812 6.75h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812c-.898 0-1.562-.664-1.562-1.562V8.312c0-.859.664-1.562 1.563-1.562m1.876 7.5H1.812a.31.31 0 0 0-.312.313v1.874c0 .196.117.313.313.313h1.875A.31.31 0 0 0 4 16.438v-1.875a.336.336 0 0 0-.312-.313M1.812 13h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812C.915 18 .25 17.336.25 16.438v-1.875C.25 13.703.914 13 1.813 13m0 7.5a.31.31 0 0 0-.312.313v1.875c0 .195.117.312.313.312h1.875A.31.31 0 0 0 4 22.688v-1.875a.336.336 0 0 0-.312-.313zm-1.562.313c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563v1.875c0 .898-.703 1.562-1.562 1.562H1.812c-.898 0-1.562-.664-1.562-1.562zM9.938 8H8.062a.31.31 0 0 0-.312.313v1.874c0 .196.117.313.313.313h1.874a.31.31 0 0 0 .313-.312V8.312A.336.336 0 0 0 9.938 8M8.062 6.75h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562V8.312c0-.859.664-1.562 1.563-1.562m0 7.5a.31.31 0 0 0-.312.313v1.874c0 .196.117.313.313.313h1.874a.31.31 0 0 0 .313-.312v-1.875a.336.336 0 0 0-.312-.313zm-1.562.313c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562zM9.938 20.5H8.062a.31.31 0 0 0-.312.313v1.875c0 .195.117.312.313.312h1.874a.31.31 0 0 0 .313-.312v-1.875a.336.336 0 0 0-.312-.313m-1.876-1.25h1.876c.859 0 1.562.703 1.562 1.563v1.875c0 .898-.703 1.562-1.562 1.562H8.062c-.898 0-1.562-.664-1.562-1.562v-1.875c0-.86.664-1.563 1.563-1.563M14.313 8a.31.31 0 0 0-.312.313v1.874c0 .196.117.313.313.313h1.874a.31.31 0 0 0 .313-.312V8.312A.336.336 0 0 0 16.188 8zm-1.562.313c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562zm3.438 5.937h-1.875a.31.31 0 0 0-.313.313v1.874c0 .196.117.313.313.313h1.874a.31.31 0 0 0 .313-.312v-1.875a.336.336 0 0 0-.312-.313M14.313 13h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562v-1.875c0-.86.664-1.563 1.563-1.563m0 7.5a.31.31 0 0 0-.313.313v1.875c0 .195.117.312.313.312h1.874a.31.31 0 0 0 .313-.312v-1.875a.336.336 0 0 0-.312-.313zm-1.563.313c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.875c0 .898-.703 1.562-1.562 1.562h-1.875c-.899 0-1.563-.664-1.563-1.562z' />
    </g>
    <defs>
      <clipPath id='f046714924ebe0732843bc3ae8063c2c__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridLgRegularIcon);
export default ForwardRef;
