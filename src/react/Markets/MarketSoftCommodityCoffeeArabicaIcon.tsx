import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketSoftCommodityCoffeeArabicaIcon = (
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
    <path
      fill='#663318'
      d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
    />
    <path
      fill='#fff'
      d='M14.227 10.477c-.148.147-.28.306-.416.462 1.368.3 2.716 1.002 3.914 2.005.675-1.681 1.997-2.967 3.743-3.56l1.103-.376c-2.064-1.76-5.7-1.176-8.344 1.469'
    />
    <path
      fill='#fff'
      d='m23.252 9.767-1.482.504a5.2 5.2 0 0 0-3.299 3.336c1.318 1.333 2.218 2.944 2.576 4.595.16-.14.324-.277.476-.43 2.508-2.507 3.163-5.896 1.729-8.005M18.081 21.895c-.6-1.83-2.146-3.153-4.034-3.527-2.192-.435-3.945-2.019-4.665-4.134l-.376-1.104c-1.76 2.064-1.175 5.75 1.47 8.394C12.12 23.17 14.171 24 15.984 24c.946 0 1.821-.247 2.546-.738z'
    />
    <path
      fill='#fff'
      d='M17.771 14.229c-2.508-2.508-5.896-3.213-8.006-1.78l.505 1.482c.612 1.8 2.095 3.147 3.96 3.517 2.218.44 4.036 2.004 4.743 4.154l.321.979c1.763-2.063 1.122-5.707-1.523-8.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketSoftCommodityCoffeeArabicaIcon);
export default ForwardRef;
