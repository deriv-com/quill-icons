import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHuaweiCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.273 5.844S4.688 8.75 6.47 12.617v.024l-.024.046c-.023.024-.047 0-.047 0-.656-.328-3.421-1.734-4.57-2.835 0 0-.703-.563-.773-1.5v-.235c.07-1.172 1.218-2.273 1.218-2.273m3.75 7.781v.023zs0 .023-.023.07c-.445.305-1.828 1.266-2.437 1.43-.868.21-1.711-.492-2.227-1.383l4.617-.164s.047 0 .07.047m.047-.469s.024 0 .024.024v.047s-.024.023-.047.023H2.578s-.445 0-.867-.187c0 0-.961-.329-1.477-1.383 0 0-.234-.47-.234-1.149v-.023c0-.258.023-.54.117-.82 0 0 3.938 2.085 5.953 3.468m-.422-9.14v-.024s.54-.117.75-.14c0 0 1.36 1.78.704 8.39 0 .024-.024.024-.024.047l-.023.024s-.024 0-.07-.024c-.423-.633-2.415-3.586-2.837-5.414 0 0-.093-.281-.093-.656v-.235c.023-.468.187-.914.468-1.265.282-.352.68-.61 1.125-.703m5.18 1.406c.235.586 0 1.453 0 1.453-.398 1.805-2.39 4.758-2.836 5.414 0 0-.023.024-.07.024 0 0-.024-.024-.047-.07-.656-6.634.703-8.391.703-8.391.375.07.727.14.727.14 1.218.305 1.523 1.43 1.523 1.43m-1.805 8.18v-.024H9l4.64.164c-.703 1.195-1.453 1.406-1.874 1.406h-.094c-.164 0-.281-.023-.281-.023-.633-.187-1.97-1.125-2.414-1.43-.024-.023-.024-.07-.024-.07.024-.023.07-.023.07-.023m4.875-5.274c-.023.938-.75 1.524-.75 1.524-1.125 1.101-3.89 2.507-4.546 2.835H8.53c-.023-.046 0-.093 0-.093 1.758-3.82 4.172-6.75 4.172-6.75s1.29 1.195 1.195 2.484m.961 1.336v.024a2.68 2.68 0 0 1-.117 1.945c-.492 1.101-1.476 1.43-1.476 1.43-.446.164-.797.164-.797.164-.07.023-2.813.023-3.54.023-.023 0-.046-.047-.046-.047 0-.023.023-.07.023-.07 2.016-1.36 5.953-3.469 5.953-3.469' />
    </g>
    <defs>
      <clipPath id='a6b62cfb68670d615b71b1c67635dcfb__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiCaptionIcon);
export default ForwardRef;
