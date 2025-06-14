import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashCaptionRegularIcon = (
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
      <path d='M.07 3.664c.118-.164.375-.21.516-.07l14.25 11.25a.35.35 0 0 1 .07.515c-.117.164-.351.188-.515.07L.14 4.18a.373.373 0 0 1-.07-.515m1.922 3.422.61.492A5.2 5.2 0 0 0 2.25 9.5c0 1.477.61 2.813 1.57 3.773A3.044 3.044 0 0 1 6.75 11h.21l.962.75H6.75a2.253 2.253 0 0 0-2.25 2.086c.844.586 1.875.914 3 .914 1.102 0 2.133-.328 2.977-.937v.023-.047l.632.492C10.102 15.078 8.813 15.5 7.5 15.5a5.97 5.97 0 0 1-5.203-3 6.05 6.05 0 0 1-.305-5.414m1.875-2.344A5.87 5.87 0 0 1 7.5 3.5a5.98 5.98 0 0 1 5.18 3c.96 1.688 1.078 3.703.304 5.438l-.609-.493A5.2 5.2 0 0 0 12.75 9.5c0-2.883-2.367-5.25-5.25-5.25-1.125 0-2.18.375-3.023.96zm2.625 2.063c.024-.024.047-.024.07-.047a1.91 1.91 0 0 1 1.875 0c.563.328.938.96.938 1.617 0 .21-.047.422-.117.633l-.656-.516a1.15 1.15 0 0 0-.141-.68A1.13 1.13 0 0 0 7.5 7.25a1 1 0 0 0-.375.07z' />
    </g>
    <defs>
      <clipPath id='99dca893614ebe3ff0d17e7774538e77__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashCaptionRegularIcon);
export default ForwardRef;
