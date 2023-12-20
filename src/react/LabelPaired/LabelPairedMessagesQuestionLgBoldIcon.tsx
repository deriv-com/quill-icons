import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMessagesQuestionLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.813 7.375c-.573.052-.886.365-.938.938v6.874c.052.573.365.886.938.938h1.874c.573.052.886.365.938.938v.742L7.93 16.28a.898.898 0 0 1 .508-.156h5c.572-.052.885-.365.937-.937V8.311c-.052-.572-.365-.885-.937-.937zM0 8.313C.026 7.505.3 6.84.82 6.32c.521-.52 1.185-.794 1.993-.82h10.625c.807.026 1.47.3 1.992.82.52.521.794 1.185.82 1.992v6.876c-.026.807-.3 1.47-.82 1.992-.521.52-1.185.794-1.992.82H8.71l-3.516 2.344c-.312.182-.625.195-.937.039a.977.977 0 0 1-.508-.82V18h-.937c-.808-.026-1.472-.3-1.993-.82-.52-.521-.794-1.185-.82-1.992zM10 19.25h1.875v.938c.052.572.365.885.938.937h3.75c.182 0 .351.052.507.156l2.305 1.524v-.742c.052-.573.365-.886.938-.938h1.875c.572-.052.885-.365.937-.937v-6.875c-.052-.573-.365-.886-.937-.938H17.5V10.5h4.688c.807.026 1.47.3 1.992.82.52.521.794 1.185.82 1.992v6.876c-.026.807-.3 1.47-.82 1.992-.521.52-1.185.794-1.992.82h-.938v1.563a.977.977 0 0 1-.508.82c-.312.156-.625.143-.937-.04L16.289 23h-3.477c-.807-.026-1.47-.3-1.992-.82-.52-.521-.794-1.185-.82-1.992zm-4.219-10c.26-.625.73-.964 1.407-1.016h1.64c.469.026.873.196 1.211.508.313.339.469.742.469 1.211 0 .651-.287 1.146-.86 1.485l-.898.507v.04c-.026.364-.234.572-.625.624-.39-.052-.599-.26-.625-.625v-.39c0-.235.104-.417.313-.547l1.21-.703a.404.404 0 0 0 .235-.39c-.026-.287-.17-.444-.43-.47h-1.64a.35.35 0 0 0-.235.196v.039c-.182.338-.456.456-.82.351-.339-.156-.456-.416-.352-.78zm1.446 5.156c0-.338.143-.612.43-.82a.872.872 0 0 1 .937 0c.286.208.43.482.43.82 0 .339-.144.612-.43.82a.872.872 0 0 1-.938 0c-.286-.208-.43-.481-.43-.82'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionLgBoldIcon);
export default ForwardRef;
