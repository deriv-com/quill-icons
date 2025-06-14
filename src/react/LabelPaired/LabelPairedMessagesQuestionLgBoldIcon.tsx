import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.813 7.375a.925.925 0 0 0-.938.938v6.874c0 .547.39.938.938.938h1.874a.95.95 0 0 1 .938.938v.78l2.266-1.562c.156-.078.351-.156.547-.156h5c.507 0 .937-.39.937-.937V8.311a.95.95 0 0 0-.937-.937zM0 8.313A2.826 2.826 0 0 1 2.813 5.5h10.625c1.523 0 2.812 1.29 2.812 2.813v6.874A2.826 2.826 0 0 1 13.438 18H8.71l-3.516 2.344c-.312.195-.664.234-.976.078a.98.98 0 0 1-.469-.86V18h-.937A2.8 2.8 0 0 1 0 15.188zM10 19.25h1.875v.938c0 .546.39.937.938.937h3.75c.156 0 .351.078.507.156l2.305 1.563v-.782c0-.507.39-.937.938-.937h1.875c.507 0 .937-.39.937-.937v-6.875a.95.95 0 0 0-.937-.938H17.5V10.5h4.688C23.71 10.5 25 11.79 25 13.313v6.874A2.826 2.826 0 0 1 22.188 23h-.938v1.563c0 .351-.195.664-.508.859-.312.156-.664.117-.976-.078L16.25 23h-3.437A2.8 2.8 0 0 1 10 20.188zM5.742 9.29a1.55 1.55 0 0 1 1.446-1.017h1.601c.938 0 1.719.743 1.719 1.72 0 .585-.352 1.171-.86 1.444l-.898.547a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.351c0-.235.117-.43.313-.547l1.21-.703a.43.43 0 0 0 .235-.39.45.45 0 0 0-.469-.47H7.188a.26.26 0 0 0-.235.157l-.039.039c-.117.312-.469.508-.781.39a.655.655 0 0 1-.39-.82m1.485 5.116a.76.76 0 0 1 .43-.781.76.76 0 0 1 .898 0c.273.156.468.469.43.781a.85.85 0 0 1-.43.82.76.76 0 0 1-.899 0c-.312-.156-.468-.468-.43-.82' />
    </g>
    <defs>
      <clipPath id='e1f7f88cec8779fe9652b73d75c82ff3__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionLgBoldIcon);
export default ForwardRef;
