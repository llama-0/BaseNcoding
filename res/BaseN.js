var alphabets = {}

alphabets['32'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
alphabets['38'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -&';
alphabets['64'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
alphabets['85'] = '!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu';
alphabets['91'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"';
alphabets['max'] = '!\"#$%\&\'()*+,-.\x2F0123456789:;\x3C=\x3E?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u00a1\u00a2\u00a3\u00a4\u00a5\u00a6\u00a7\u00a8\u00a9\u00aa\u00ab\u00ac\u00ad\u00ae\u00af\u00b0\u00b1\u00b2\u00b3\u00b4\u00b5\u00b6\u00b7\u00b8\u00b9\u00ba\u00bb\u00bc\u00bd\u00be\u00bf\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5\u00c6\u00c7\u00c8\u00c9\u00ca\u00cb\u00cc\u00cd\u00ce\u00cf\u00d0\u00d1\u00d2\u00d3\u00d4\u00d5\u00d6\u00d7\u00d8\u00d9\u00da\u00db\u00dc\u00dd\u00de\u00df\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e6\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f1\u00f2\u00f3\u00f4\u00f5\u00f6\u00f7\u00f8\u00f9\u00fa\u00fb\u00fc\u00fd\u00fe\u00ff\u0100\u0101\u0102\u0103\u0104\u0105\u0106\u0107\u0108\u0109\u010a\u010b\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u0118\u0119\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0125\u0126\u0127\u0128\u0129\u012a\u012b\u012c\u012d\u012e\u012f\u0130\u0131\u0132\u0133\u0134\u0135\u0136\u0137\u0138\u0139\u013a\u013b\u013c\u013d\u013e\u013f\u0140\u0141\u0142\u0143\u0144\u0145\u0146\u0147\u0148\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0155\u0156\u0157\u0158\u0159\u015a\u015b\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178\u0179\u017a\u017b\u017c\u017d\u017e\u017f\u0180\u0181\u0182\u0183\u0184\u0185\u0186\u0187\u0188\u0189\u018a\u018b\u018c\u018d\u018e\u018f\u0190\u0191\u0192\u0193\u0194\u0195\u0196\u0197\u0198\u0199\u019a\u019b\u019c\u019d\u019e\u019f\u01a0\u01a1\u01a2\u01a3\u01a4\u01a5\u01a6\u01a7\u01a8\u01a9\u01aa\u01ab\u01ac\u01ad\u01ae\u01af\u01b0\u01b1\u01b2\u01b3\u01b4\u01b5\u01b6\u01b7\u01b8\u01b9\u01ba\u01bb\u01bc\u01bd\u01be\u01bf\u01c0\u01c1\u01c2\u01c3\u01c4\u01c5\u01c6\u01c7\u01c8\u01c9\u01ca\u01cb\u01cc\u01cd\u01ce\u01cf\u01d0\u01d1\u01d2\u01d3\u01d4\u01d5\u01d6\u01d7\u01d8\u01d9\u01da\u01db\u01dc\u01dd\u01de\u01df\u01e0\u01e1\u01e2\u01e3\u01e4\u01e5\u01e6\u01e7\u01e8\u01e9\u01ea\u01eb\u01ec\u01ed\u01ee\u01ef\u01f0\u01f1\u01f2\u01f3\u01f4\u01f5\u01f6\u01f7\u01f8\u01f9\u01fa\u01fb\u01fc\u01fd\u01fe\u01ff\u0200\u0201\u0202\u0203\u0204\u0205\u0206\u0207\u0208\u0209\u020a\u020b\u020c\u020d\u020e\u020f\u0210\u0211\u0212\u0213\u0214\u0215\u0216\u0217\u0218\u0219\u021a\u021b\u021c\u021d\u021e\u021f\u0220\u0221\u0222\u0223\u0224\u0225\u0226\u0227\u0228\u0229\u022a\u022b\u022c\u022d\u022e\u022f\u0230\u0231\u0232\u0233\u0234\u0235\u0236\u0237\u0238\u0239\u023a\u023b\u023c\u023d\u023e\u023f\u0240\u0241\u0242\u0243\u0244\u0245\u0246\u0247\u0248\u0249\u024a\u024b\u024c\u024d\u024e\u024f\u0250\u0251\u0252\u0253\u0254\u0255\u0256\u0257\u0258\u0259\u025a\u025b\u025c\u025d\u025e\u025f\u0260\u0261\u0262\u0263\u0264\u0265\u0266\u0267\u0268\u0269\u026a\u026b\u026c\u026d\u026e\u026f\u0270\u0271\u0272\u0273\u0274\u0275\u0276\u0277\u0278\u0279\u027a\u027b\u027c\u027d\u027e\u027f\u0280\u0281\u0282\u0283\u0284\u0285\u0286\u0287\u0288\u0289\u028a\u028b\u028c\u028d\u028e\u028f\u0290\u0291\u0292\u0293\u0294\u0295\u0296\u0297\u0298\u0299\u029a\u029b\u029c\u029d\u029e\u029f\u02a0\u02a1\u02a2\u02a3\u02a4\u02a5\u02a6\u02a7\u02a8\u02a9\u02aa\u02ab\u02ac\u02ad\u02ae\u02af\u02b0\u02b1\u02b2\u02b3\u02b4\u02b5\u02b6\u02b7\u02b8\u02b9\u02ba\u02bb\u02bc\u02bd\u02be\u02bf\u02c0\u02c1\u02c2\u02c3\u02c4\u02c5\u02c6\u02c7\u02c8\u02c9\u02ca\u02cb\u02cc\u02cd\u02ce\u02cf\u02d0\u02d1\u02d2\u02d3\u02d4\u02d5\u02d6\u02d7\u02d8\u02d9\u02da\u02db\u02dc\u02dd\u02de\u02df\u02e0\u02e1\u02e2\u02e3\u02e4\u02e5\u02e6\u02e7\u02e8\u02e9\u02ea\u02eb\u02ec\u02ed\u02ee\u02ef\u02f0\u02f1\u02f2\u02f3\u02f4\u02f5\u02f6\u02f7\u02f8\u02f9\u02fa\u02fb\u02fc\u02fd\u02fe\u02ff\u0300\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f\u0310\u0311\u0312\u0313\u0314\u0315\u0316\u0317\u0318\u0319\u031a\u031b\u031c\u031d\u031e\u031f\u0320\u0321\u0322\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0334\u0335\u0336\u0337\u0338\u0339\u033a\u033b\u033c\u033d\u033e\u033f\u0340\u0341\u0342\u0343\u0344\u0345\u0346\u0347\u0348\u0349\u034a\u034b\u034c\u034d\u034e\u034f\u0350\u0351\u0352\u0353\u0354\u0355\u0356\u0357\u0358\u0359\u035a\u035b\u035c\u035d\u035e\u035f\u0360\u0361\u0362\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f\u0370\u0371\u0372\u0373\u0374\u0375\u0376\u0377\u0378\u0379\u037a\u037b\u037c\u037d\u037e\u037f\u0380\u0381\u0382\u0383\u0384\u0385\u0386\u0387\u0388\u0389\u038a\u038b\u038c\u038d\u038e\u038f\u0390\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039a\u039b\u039c\u039d\u039e\u039f\u03a0\u03a1\u03a2\u03a3\u03a4\u03a5\u03a6\u03a7\u03a8\u03a9\u03aa\u03ab\u03ac\u03ad\u03ae\u03af\u03b0\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c2\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9\u03ca\u03cb\u03cc\u03cd\u03ce\u03cf\u03d0\u03d1\u03d2\u03d3\u03d4\u03d5\u03d6\u03d7\u03d8\u03d9\u03da\u03db\u03dc\u03dd\u03de\u03df\u03e0\u03e1\u03e2\u03e3\u03e4\u03e5\u03e6\u03e7\u03e8\u03e9\u03ea\u03eb\u03ec\u03ed\u03ee\u03ef\u03f0\u03f1\u03f2\u03f3\u03f4\u03f5\u03f6\u03f7\u03f8\u03f9\u03fa\u03fb\u03fc\u03fd\u03fe\u03ff\u0400\u0401\u0402\u0403\u0404\u0405\u0406\u0407\u0408\u0409\u040a\u040b\u040c\u040d\u040e\u040f\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f\u0450\u0451\u0452\u0453\u0454\u0455\u0456\u0457\u0458\u0459\u045a\u045b\u045c\u045d\u045e\u045f\u0460\u0461\u0462\u0463\u0464\u0465\u0466\u0467\u0468\u0469\u046a\u046b\u046c\u046d\u046e\u046f\u0470\u0471\u0472\u0473\u0474\u0475\u0476\u0477\u0478\u0479\u047a\u047b\u047c\u047d\u047e\u047f\u0480\u0481\u0482\u0483\u0484\u0485\u0486\u0487\u0488\u0489\u048a\u048b\u048c\u048d\u048e\u048f\u0490\u0491\u0492\u0493\u0494\u0495\u0496\u0497\u0498\u0499\u049a\u049b\u049c\u049d\u049e\u049f\u04a0\u04a1\u04a2\u04a3\u04a4\u04a5\u04a6\u04a7\u04a8\u04a9\u04aa\u04ab\u04ac\u04ad\u04ae\u04af\u04b0\u04b1\u04b2\u04b3\u04b4\u04b5\u04b6\u04b7\u04b8\u04b9\u04ba\u04bb\u04bc\u04bd\u04be\u04bf\u04c0\u04c1\u04c2\u04c3\u04c4\u04c5\u04c6\u04c7\u04c8\u04c9\u04ca\u04cb\u04cc\u04cd\u04ce\u04cf\u04d0\u04d1\u04d2\u04d3\u04d4\u04d5\u04d6\u04d7\u04d8\u04d9\u04da\u04db\u04dc\u04dd\u04de\u04df\u04e0\u04e1\u04e2\u04e3\u04e4\u04e5\u04e6\u04e7\u04e8\u04e9\u04ea\u04eb\u04ec\u04ed\u04ee\u04ef\u04f0\u04f1\u04f2\u04f3\u04f4\u04f5\u04f6\u04f7\u04f8\u04f9\u04fa\u04fb\u04fc\u04fd\u04fe\u04ff\u0500\u0501\u0502\u0503\u0504\u0505\u0506\u0507\u0508\u0509\u050a\u050b\u050c\u050d\u050e\u050f\u0510\u0511\u0512\u0513\u0514\u0515\u0516\u0517\u0518\u0519\u051a\u051b\u051c\u051d\u051e\u051f\u0520\u0521\u0522\u0523\u0524\u0525\u0526\u0527\u0528\u0529\u052a\u052b\u052c\u052d\u052e\u052f\u0530\u0531\u0532\u0533\u0534\u0535\u0536\u0537\u0538\u0539\u053a\u053b\u053c\u053d\u053e\u053f\u0540\u0541\u0542\u0543\u0544\u0545\u0546\u0547\u0548\u0549\u054a\u054b\u054c\u054d\u054e\u054f\u0550\u0551\u0552\u0553\u0554\u0555\u0556\u0557\u0558\u0559\u055a\u055b\u055c\u055d\u055e\u055f\u0560\u0561\u0562\u0563\u0564\u0565\u0566\u0567\u0568\u0569\u056a\u056b\u056c\u056d\u056e\u056f\u0570\u0571\u0572\u0573\u0574\u0575\u0576\u0577\u0578\u0579\u057a\u057b\u057c\u057d\u057e\u057f\u0580\u0581\u0582\u0583\u0584\u0585\u0586\u0587\u0588\u0589\u058a\u058b\u058c\u058d\u058e\u058f\u0590\u0591\u0592\u0593\u0594\u0595\u0596\u0597\u0598\u0599\u059a\u059b\u059c\u059d\u059e\u059f\u05a0\u05a1\u05a2\u05a3\u05a4\u05a5\u05a6\u05a7\u05a8\u05a9\u05aa\u05ab\u05ac\u05ad\u05ae\u05af\u05b0\u05b1\u05b2\u05b3\u05b4\u05b5\u05b6\u05b7\u05b8\u05b9\u05ba\u05bb\u05bc\u05bd\u05be\u05bf\u05c0\u05c1\u05c2\u05c3\u05c4\u05c5\u05c6\u05c7\u05c8\u05c9\u05ca\u05cb\u05cc\u05cd\u05ce\u05cf\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05d6\u05d7\u05d8\u05d9\u05da\u05db\u05dc\u05dd\u05de\u05df\u05e0\u05e1\u05e2\u05e3\u05e4\u05e5\u05e6\u05e7\u05e8\u05e9\u05ea\u05eb\u05ec\u05ed\u05ee\u05ef\u05f0\u05f1\u05f2\u05f3\u05f4\u05f5\u05f6\u05f7\u05f8\u05f9\u05fa\u05fb\u05fc\u05fd\u05fe\u05ff\u0600\u0601\u0602\u0603\u0604\u0605\u0606\u0607\u0608\u0609\u060a\u060b\u060c\u060d\u060e\u060f\u0610\u0611\u0612\u0613\u0614\u0615\u0616\u0617\u0618\u0619\u061a\u061b\u061c\u061d\u061e\u061f\u0620\u0621\u0622\u0623\u0624\u0625\u0626\u0627\u0628\u0629\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u063b\u063c\u063d\u063e\u063f\u0640\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u0649\u064a\u064b\u064c\u064d\u064e\u064f\u0650\u0651\u0652\u0653\u0654\u0655\u0656\u0657\u0658\u0659\u065a\u065b\u065c\u065d\u065e\u065f\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u066a\u066b\u066c\u066d\u066e\u066f\u0670\u0671\u0672\u0673\u0674\u0675\u0676\u0677\u0678\u0679\u067a\u067b\u067c\u067d\u067e\u067f\u0680\u0681\u0682\u0683\u0684\u0685\u0686\u0687\u0688\u0689\u068a\u068b\u068c\u068d\u068e\u068f\u0690\u0691\u0692\u0693\u0694\u0695\u0696\u0697\u0698\u0699\u069a\u069b\u069c\u069d\u069e\u069f\u06a0\u06a1\u06a2\u06a3\u06a4\u06a5\u06a6\u06a7\u06a8\u06a9\u06aa\u06ab\u06ac\u06ad\u06ae\u06af\u06b0\u06b1\u06b2\u06b3\u06b4\u06b5\u06b6\u06b7\u06b8\u06b9\u06ba\u06bb\u06bc\u06bd\u06be\u06bf\u06c0\u06c1\u06c2\u06c3\u06c4\u06c5\u06c6\u06c7\u06c8\u06c9\u06ca\u06cb\u06cc\u06cd\u06ce\u06cf\u06d0\u06d1\u06d2\u06d3\u06d4\u06d5\u06d6\u06d7\u06d8\u06d9\u06da\u06db\u06dc\u06dd\u06de\u06df\u06e0\u06e1\u06e2\u06e3\u06e4\u06e5\u06e6\u06e7\u06e8\u06e9\u06ea\u06eb\u06ec\u06ed\u06ee\u06ef\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06fa\u06fb\u06fc\u06fd\u06fe\u06ff\u0700\u0701\u0702\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u070a\u070b\u070c\u070d\u070e\u070f\u0710\u0711\u0712\u0713\u0714\u0715\u0716\u0717\u0718\u0719\u071a\u071b\u071c\u071d\u071e\u071f\u0720\u0721\u0722\u0723\u0724\u0725\u0726\u0727\u0728\u0729\u072a\u072b\u072c\u072d\u072e\u072f\u0730\u0731\u0732\u0733\u0734\u0735\u0736\u0737\u0738\u0739\u073a\u073b\u073c\u073d\u073e\u073f\u0740\u0741\u0742\u0743\u0744\u0745\u0746\u0747\u0748\u0749\u074a\u074b\u074c\u074d\u074e\u074f\u0750\u0751\u0752\u0753\u0754\u0755\u0756\u0757\u0758\u0759\u075a\u075b\u075c\u075d\u075e\u075f\u0760\u0761\u0762\u0763\u0764\u0765\u0766\u0767\u0768\u0769\u076a\u076b\u076c\u076d\u076e\u076f\u0770\u0771\u0772\u0773\u0774\u0775\u0776\u0777\u0778\u0779\u077a\u077b\u077c\u077d\u077e\u077f\u0780\u0781\u0782\u0783\u0784\u0785\u0786\u0787\u0788\u0789\u078a\u078b\u078c\u078d\u078e\u078f\u0790\u0791\u0792\u0793\u0794\u0795\u0796\u0797\u0798\u0799\u079a\u079b\u079c\u079d\u079e\u079f\u07a0\u07a1\u07a2\u07a3\u07a4\u07a5\u07a6\u07a7\u07a8\u07a9\u07aa\u07ab\u07ac\u07ad\u07ae\u07af\u07b0\u07b1\u07b2\u07b3\u07b4\u07b5\u07b6\u07b7\u07b8\u07b9\u07ba\u07bb\u07bc\u07bd\u07be\u07bf\u07c0\u07c1\u07c2\u07c3\u07c4\u07c5\u07c6\u07c7\u07c8\u07c9\u07ca\u07cb\u07cc\u07cd\u07ce\u07cf\u07d0\u07d1\u07d2\u07d3\u07d4\u07d5\u07d6\u07d7\u07d8\u07d9\u07da\u07db\u07dc\u07dd\u07de\u07df\u07e0\u07e1\u07e2\u07e3\u07e4\u07e5\u07e6\u07e7\u07e8\u07e9\u07ea\u07eb\u07ec\u07ed\u07ee\u07ef\u07f0\u07f1\u07f2\u07f3\u07f4\u07f5\u07f6\u07f7\u07f8\u07f9\u07fa\u07fb\u07fc\u07fd\u07fe\u07ff\u0800\u0801\u0802\u0803\u0804\u0805\u0806\u0807\u0808\u0809\u080a\u080b\u080c\u080d\u080e\u080f\u0810\u0811\u0812\u0813\u0814\u0815\u0816\u0817\u0818\u0819\u081a\u081b\u081c\u081d\u081e\u081f\u0820\u0821\u0822\u0823\u0824\u0825\u0826\u0827\u0828\u0829\u082a\u082b\u082c\u082d\u082e\u082f\u0830\u0831\u0832\u0833\u0834\u0835\u0836\u0837\u0838\u0839\u083a\u083b\u083c\u083d\u083e\u083f\u0840\u0841\u0842\u0843\u0844\u0845\u0846\u0847\u0848\u0849\u084a\u084b\u084c\u084d\u084e\u084f\u0850\u0851\u0852\u0853\u0854\u0855\u0856\u0857\u0858\u0859\u085a\u085b\u085c\u085d\u085e\u085f\u0860\u0861\u0862\u0863\u0864\u0865\u0866\u0867\u0868\u0869\u086a\u086b\u086c\u086d\u086e\u086f\u0870\u0871\u0872\u0873\u0874\u0875\u0876\u0877\u0878\u0879\u087a\u087b\u087c\u087d\u087e\u087f\u0880\u0881\u0882\u0883\u0884\u0885\u0886\u0887\u0888\u0889\u088a\u088b\u088c\u088d\u088e\u088f\u0890\u0891\u0892\u0893\u0894\u0895\u0896\u0897\u0898\u0899\u089a\u089b\u089c\u089d\u089e\u089f\u08a0\u08a1\u08a2\u08a3\u08a4\u08a5\u08a6\u08a7\u08a8\u08a9\u08aa\u08ab\u08ac\u08ad\u08ae\u08af\u08b0\u08b1\u08b2\u08b3\u08b4\u08b5\u08b6\u08b7\u08b8\u08b9\u08ba\u08bb\u08bc\u08bd\u08be\u08bf\u08c0\u08c1\u08c2\u08c3\u08c4\u08c5\u08c6\u08c7\u08c8\u08c9\u08ca\u08cb\u08cc\u08cd\u08ce\u08cf\u08d0\u08d1\u08d2\u08d3\u08d4\u08d5\u08d6\u08d7\u08d8\u08d9\u08da\u08db\u08dc\u08dd\u08de\u08df\u08e0\u08e1\u08e2\u08e3\u08e4\u08e5\u08e6\u08e7\u08e8\u08e9\u08ea\u08eb\u08ec\u08ed\u08ee\u08ef\u08f0\u08f1\u08f2\u08f3\u08f4\u08f5\u08f6\u08f7\u08f8\u08f9\u08fa\u08fb\u08fc\u08fd\u08fe\u08ff\u0900\u0901\u0902\u0903\u0904\u0905\u0906\u0907\u0908\u0909\u090a\u090b\u090c\u090d\u090e\u090f\u0910\u0911\u0912\u0913\u0914\u0915\u0916\u0917\u0918\u0919\u091a\u091b\u091c\u091d\u091e\u091f\u0920\u0921\u0922\u0923\u0924\u0925\u0926\u0927\u0928\u0929\u092a\u092b\u092c\u092d\u092e\u092f\u0930\u0931\u0932\u0933\u0934\u0935\u0936\u0937\u0938\u0939\u093a\u093b\u093c\u093d\u093e\u093f\u0940\u0941\u0942\u0943\u0944\u0945\u0946\u0947\u0948\u0949\u094a\u094b\u094c\u094d\u094e\u094f\u0950\u0951\u0952\u0953\u0954\u0955\u0956\u0957\u0958\u0959\u095a\u095b\u095c\u095d\u095e\u095f\u0960\u0961\u0962\u0963\u0964\u0965\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0970\u0971\u0972\u0973\u0974\u0975\u0976\u0977\u0978\u0979\u097a\u097b\u097c\u097d\u097e\u097f\u0980\u0981\u0982\u0983\u0984\u0985\u0986\u0987\u0988\u0989\u098a\u098b\u098c\u098d\u098e\u098f\u0990\u0991\u0992\u0993\u0994\u0995\u0996\u0997\u0998\u0999\u099a\u099b\u099c\u099d\u099e\u099f\u09a0\u09a1\u09a2\u09a3\u09a4\u09a5\u09a6\u09a7\u09a8\u09a9\u09aa\u09ab\u09ac\u09ad\u09ae\u09af\u09b0\u09b1\u09b2\u09b3\u09b4\u09b5\u09b6\u09b7\u09b8\u09b9\u09ba\u09bb\u09bc\u09bd\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c4\u09c5\u09c6\u09c7\u09c8\u09c9\u09ca\u09cb\u09cc\u09cd\u09ce\u09cf\u09d0\u09d1\u09d2\u09d3\u09d4\u09d5\u09d6\u09d7\u09d8\u09d9\u09da\u09db\u09dc\u09dd\u09de\u09df\u09e0\u09e1\u09e2\u09e3\u09e4\u09e5\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09f0\u09f1\u09f2\u09f3\u09f4\u09f5\u09f6\u09f7\u09f8\u09f9\u09fa\u09fb\u09fc\u09fd\u09fe\u09ff\u0a00\u0a01\u0a02\u0a03\u0a04\u0a05\u0a06\u0a07\u0a08\u0a09\u0a0a\u0a0b\u0a0c\u0a0d\u0a0e\u0a0f\u0a10\u0a11\u0a12\u0a13\u0a14\u0a15\u0a16\u0a17\u0a18\u0a19\u0a1a\u0a1b\u0a1c\u0a1d\u0a1e\u0a1f\u0a20\u0a21\u0a22\u0a23\u0a24\u0a25\u0a26\u0a27\u0a28\u0a29\u0a2a\u0a2b\u0a2c\u0a2d\u0a2e\u0a2f\u0a30\u0a31\u0a32\u0a33\u0a34\u0a35\u0a36\u0a37\u0a38\u0a39\u0a3a\u0a3b\u0a3c\u0a3d\u0a3e\u0a3f\u0a40\u0a41\u0a42\u0a43\u0a44\u0a45\u0a46\u0a47\u0a48\u0a49\u0a4a\u0a4b\u0a4c\u0a4d\u0a4e\u0a4f\u0a50\u0a51\u0a52\u0a53\u0a54\u0a55\u0a56\u0a57\u0a58\u0a59\u0a5a\u0a5b\u0a5c\u0a5d\u0a5e\u0a5f\u0a60\u0a61\u0a62\u0a63\u0a64\u0a65\u0a66\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a70\u0a71\u0a72\u0a73\u0a74\u0a75\u0a76\u0a77\u0a78\u0a79\u0a7a\u0a7b\u0a7c\u0a7d\u0a7e\u0a7f\u0a80\u0a81\u0a82\u0a83\u0a84\u0a85\u0a86\u0a87\u0a88\u0a89\u0a8a\u0a8b\u0a8c\u0a8d\u0a8e\u0a8f\u0a90\u0a91\u0a92\u0a93\u0a94\u0a95\u0a96\u0a97\u0a98\u0a99\u0a9a\u0a9b\u0a9c\u0a9d\u0a9e\u0a9f\u0aa0\u0aa1\u0aa2\u0aa3\u0aa4\u0aa5\u0aa6\u0aa7\u0aa8\u0aa9\u0aaa\u0aab\u0aac\u0aad\u0aae\u0aaf\u0ab0\u0ab1\u0ab2\u0ab3\u0ab4\u0ab5\u0ab6\u0ab7\u0ab8\u0ab9\u0aba\u0abb\u0abc\u0abd\u0abe\u0abf\u0ac0\u0ac1\u0ac2\u0ac3\u0ac4\u0ac5\u0ac6\u0ac7\u0ac8\u0ac9\u0aca\u0acb\u0acc\u0acd\u0ace\u0acf\u0ad0\u0ad1\u0ad2\u0ad3\u0ad4\u0ad5\u0ad6\u0ad7\u0ad8\u0ad9\u0ada\u0adb\u0adc\u0add\u0ade\u0adf\u0ae0\u0ae1\u0ae2\u0ae3\u0ae4\u0ae5\u0ae6\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0af0\u0af1\u0af2\u0af3\u0af4\u0af5\u0af6\u0af7\u0af8\u0af9\u0afa\u0afb\u0afc\u0afd\u0afe\u0aff\u0b00\u0b01\u0b02\u0b03\u0b04\u0b05\u0b06\u0b07\u0b08\u0b09\u0b0a\u0b0b\u0b0c\u0b0d\u0b0e\u0b0f\u0b10\u0b11\u0b12\u0b13\u0b14\u0b15\u0b16\u0b17\u0b18\u0b19\u0b1a\u0b1b\u0b1c\u0b1d\u0b1e\u0b1f\u0b20\u0b21\u0b22\u0b23\u0b24\u0b25\u0b26\u0b27\u0b28\u0b29\u0b2a\u0b2b\u0b2c\u0b2d\u0b2e\u0b2f\u0b30\u0b31\u0b32\u0b33\u0b34\u0b35\u0b36\u0b37\u0b38\u0b39\u0b3a\u0b3b\u0b3c\u0b3d\u0b3e\u0b3f\u0b40\u0b41\u0b42\u0b43\u0b44\u0b45\u0b46\u0b47\u0b48\u0b49\u0b4a\u0b4b\u0b4c\u0b4d\u0b4e\u0b4f\u0b50\u0b51\u0b52\u0b53\u0b54\u0b55\u0b56\u0b57\u0b58\u0b59\u0b5a\u0b5b\u0b5c\u0b5d\u0b5e\u0b5f\u0b60\u0b61\u0b62\u0b63\u0b64\u0b65\u0b66\u0b67\u0b68\u0b69\u0b6a\u0b6b\u0b6c\u0b6d\u0b6e\u0b6f\u0b70\u0b71\u0b72\u0b73\u0b74\u0b75\u0b76\u0b77\u0b78\u0b79\u0b7a\u0b7b\u0b7c\u0b7d\u0b7e\u0b7f\u0b80\u0b81\u0b82\u0b83\u0b84\u0b85\u0b86\u0b87\u0b88\u0b89\u0b8a\u0b8b\u0b8c\u0b8d\u0b8e\u0b8f\u0b90\u0b91\u0b92\u0b93\u0b94\u0b95\u0b96\u0b97\u0b98\u0b99\u0b9a\u0b9b\u0b9c\u0b9d\u0b9e\u0b9f\u0ba0\u0ba1\u0ba2\u0ba3\u0ba4\u0ba5\u0ba6\u0ba7\u0ba8\u0ba9\u0baa\u0bab\u0bac\u0bad\u0bae\u0baf\u0bb0\u0bb1\u0bb2\u0bb3\u0bb4\u0bb5\u0bb6\u0bb7\u0bb8\u0bb9\u0bba\u0bbb\u0bbc\u0bbd\u0bbe\u0bbf\u0bc0\u0bc1\u0bc2\u0bc3\u0bc4\u0bc5\u0bc6\u0bc7\u0bc8\u0bc9\u0bca\u0bcb\u0bcc\u0bcd\u0bce\u0bcf\u0bd0\u0bd1\u0bd2\u0bd3\u0bd4\u0bd5\u0bd6\u0bd7\u0bd8\u0bd9\u0bda\u0bdb\u0bdc\u0bdd\u0bde\u0bdf\u0be0\u0be1\u0be2\u0be3\u0be4\u0be5\u0be6\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0bf0\u0bf1\u0bf2\u0bf3\u0bf4\u0bf5\u0bf6\u0bf7\u0bf8\u0bf9\u0bfa\u0bfb\u0bfc\u0bfd\u0bfe\u0bff\u0c00\u0c01\u0c02\u0c03\u0c04\u0c05\u0c06\u0c07\u0c08\u0c09\u0c0a\u0c0b\u0c0c\u0c0d\u0c0e\u0c0f\u0c10\u0c11\u0c12\u0c13\u0c14\u0c15\u0c16\u0c17\u0c18\u0c19\u0c1a\u0c1b\u0c1c\u0c1d\u0c1e\u0c1f\u0c20\u0c21\u0c22\u0c23\u0c24\u0c25\u0c26\u0c27\u0c28\u0c29\u0c2a\u0c2b\u0c2c\u0c2d\u0c2e\u0c2f\u0c30\u0c31\u0c32\u0c33\u0c34\u0c35\u0c36\u0c37\u0c38\u0c39\u0c3a\u0c3b\u0c3c\u0c3d\u0c3e\u0c3f\u0c40\u0c41\u0c42\u0c43\u0c44\u0c45\u0c46\u0c47\u0c48\u0c49\u0c4a\u0c4b\u0c4c\u0c4d\u0c4e\u0c4f\u0c50\u0c51\u0c52\u0c53\u0c54\u0c55\u0c56\u0c57\u0c58\u0c59\u0c5a\u0c5b\u0c5c\u0c5d\u0c5e\u0c5f\u0c60\u0c61\u0c62\u0c63\u0c64\u0c65\u0c66\u0c67\u0c68\u0c69\u0c6a\u0c6b\u0c6c\u0c6d\u0c6e\u0c6f\u0c70\u0c71\u0c72\u0c73\u0c74\u0c75\u0c76\u0c77\u0c78\u0c79\u0c7a\u0c7b\u0c7c\u0c7d\u0c7e\u0c7f\u0c80\u0c81\u0c82\u0c83\u0c84\u0c85\u0c86\u0c87\u0c88\u0c89\u0c8a\u0c8b\u0c8c\u0c8d\u0c8e\u0c8f\u0c90\u0c91\u0c92\u0c93\u0c94\u0c95\u0c96\u0c97\u0c98\u0c99\u0c9a\u0c9b\u0c9c\u0c9d\u0c9e\u0c9f\u0ca0\u0ca1\u0ca2\u0ca3\u0ca4\u0ca5\u0ca6\u0ca7\u0ca8\u0ca9\u0caa\u0cab\u0cac\u0cad\u0cae\u0caf\u0cb0\u0cb1\u0cb2\u0cb3\u0cb4\u0cb5\u0cb6\u0cb7\u0cb8\u0cb9\u0cba\u0cbb\u0cbc\u0cbd\u0cbe\u0cbf\u0cc0\u0cc1\u0cc2\u0cc3\u0cc4\u0cc5\u0cc6\u0cc7\u0cc8\u0cc9\u0cca\u0ccb\u0ccc\u0ccd\u0cce\u0ccf\u0cd0\u0cd1\u0cd2\u0cd3\u0cd4\u0cd5\u0cd6\u0cd7\u0cd8\u0cd9\u0cda\u0cdb\u0cdc\u0cdd\u0cde\u0cdf\u0ce0\u0ce1\u0ce2\u0ce3\u0ce4\u0ce5\u0ce6\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0cf0\u0cf1\u0cf2\u0cf3\u0cf4\u0cf5\u0cf6\u0cf7\u0cf8\u0cf9\u0cfa\u0cfb\u0cfc\u0cfd\u0cfe\u0cff\u0d00\u0d01\u0d02\u0d03\u0d04\u0d05\u0d06\u0d07\u0d08\u0d09\u0d0a\u0d0b\u0d0c\u0d0d\u0d0e\u0d0f\u0d10\u0d11\u0d12\u0d13\u0d14\u0d15\u0d16\u0d17\u0d18\u0d19\u0d1a\u0d1b\u0d1c\u0d1d\u0d1e\u0d1f\u0d20\u0d21\u0d22\u0d23\u0d24\u0d25\u0d26\u0d27\u0d28\u0d29\u0d2a\u0d2b\u0d2c\u0d2d\u0d2e\u0d2f\u0d30\u0d31\u0d32\u0d33\u0d34\u0d35\u0d36\u0d37\u0d38\u0d39\u0d3a\u0d3b\u0d3c\u0d3d\u0d3e\u0d3f\u0d40\u0d41\u0d42\u0d43\u0d44\u0d45\u0d46\u0d47\u0d48\u0d49\u0d4a\u0d4b\u0d4c\u0d4d\u0d4e\u0d4f\u0d50\u0d51\u0d52\u0d53\u0d54\u0d55\u0d56\u0d57\u0d58\u0d59\u0d5a\u0d5b\u0d5c\u0d5d\u0d5e\u0d5f\u0d60\u0d61\u0d62\u0d63\u0d64\u0d65\u0d66\u0d67\u0d68\u0d69\u0d6a\u0d6b\u0d6c\u0d6d\u0d6e\u0d6f\u0d70\u0d71\u0d72\u0d73\u0d74\u0d75\u0d76\u0d77\u0d78\u0d79\u0d7a\u0d7b\u0d7c\u0d7d\u0d7e\u0d7f\u0d80\u0d81\u0d82\u0d83\u0d84\u0d85\u0d86\u0d87\u0d88\u0d89\u0d8a\u0d8b\u0d8c\u0d8d\u0d8e\u0d8f\u0d90\u0d91\u0d92\u0d93\u0d94\u0d95\u0d96\u0d97\u0d98\u0d99\u0d9a\u0d9b\u0d9c\u0d9d\u0d9e\u0d9f\u0da0\u0da1\u0da2\u0da3\u0da4\u0da5\u0da6\u0da7\u0da8\u0da9\u0daa\u0dab\u0dac\u0dad\u0dae\u0daf\u0db0\u0db1\u0db2\u0db3\u0db4\u0db5\u0db6\u0db7\u0db8\u0db9\u0dba\u0dbb\u0dbc\u0dbd\u0dbe\u0dbf\u0dc0\u0dc1\u0dc2\u0dc3\u0dc4\u0dc5\u0dc6\u0dc7\u0dc8\u0dc9\u0dca\u0dcb\u0dcc\u0dcd\u0dce\u0dcf\u0dd0\u0dd1\u0dd2\u0dd3\u0dd4\u0dd5\u0dd6\u0dd7\u0dd8\u0dd9\u0dda\u0ddb\u0ddc\u0ddd\u0dde\u0ddf\u0de0\u0de1\u0de2\u0de3\u0de4\u0de5\u0de6\u0de7\u0de8\u0de9\u0dea\u0deb\u0dec\u0ded\u0dee\u0def\u0df0\u0df1\u0df2\u0df3\u0df4\u0df5\u0df6\u0df7\u0df8\u0df9\u0dfa\u0dfb\u0dfc\u0dfd\u0dfe\u0dff\u0e00\u0e01\u0e02\u0e03\u0e04\u0e05\u0e06\u0e07\u0e08\u0e09\u0e0a\u0e0b\u0e0c\u0e0d\u0e0e\u0e0f\u0e10\u0e11\u0e12\u0e13\u0e14\u0e15\u0e16\u0e17\u0e18\u0e19\u0e1a\u0e1b\u0e1c\u0e1d\u0e1e\u0e1f\u0e20\u0e21\u0e22\u0e23\u0e24\u0e25\u0e26\u0e27\u0e28\u0e29\u0e2a\u0e2b\u0e2c\u0e2d\u0e2e\u0e2f\u0e30\u0e31\u0e32\u0e33\u0e34\u0e35\u0e36\u0e37\u0e38\u0e39\u0e3a\u0e3b\u0e3c\u0e3d\u0e3e\u0e3f\u0e40\u0e41\u0e42\u0e43\u0e44\u0e45\u0e46\u0e47\u0e48\u0e49\u0e4a\u0e4b\u0e4c\u0e4d\u0e4e\u0e4f\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59\u0e5a\u0e5b\u0e5c\u0e5d\u0e5e\u0e5f\u0e60\u0e61\u0e62\u0e63\u0e64\u0e65\u0e66\u0e67\u0e68\u0e69\u0e6a\u0e6b\u0e6c\u0e6d\u0e6e\u0e6f\u0e70\u0e71\u0e72\u0e73\u0e74\u0e75\u0e76\u0e77\u0e78\u0e79\u0e7a\u0e7b\u0e7c\u0e7d\u0e7e\u0e7f\u0e80\u0e81\u0e82\u0e83\u0e84\u0e85\u0e86\u0e87\u0e88\u0e89\u0e8a\u0e8b\u0e8c\u0e8d\u0e8e\u0e8f\u0e90\u0e91\u0e92\u0e93\u0e94\u0e95\u0e96\u0e97\u0e98\u0e99\u0e9a\u0e9b\u0e9c\u0e9d\u0e9e\u0e9f\u0ea0\u0ea1\u0ea2\u0ea3\u0ea4\u0ea5\u0ea6\u0ea7\u0ea8\u0ea9\u0eaa\u0eab\u0eac\u0ead\u0eae\u0eaf\u0eb0\u0eb1\u0eb2\u0eb3\u0eb4\u0eb5\u0eb6\u0eb7\u0eb8\u0eb9\u0eba\u0ebb\u0ebc\u0ebd\u0ebe\u0ebf\u0ec0\u0ec1\u0ec2\u0ec3\u0ec4\u0ec5\u0ec6\u0ec7\u0ec8\u0ec9\u0eca\u0ecb\u0ecc\u0ecd\u0ece\u0ecf\u0ed0\u0ed1\u0ed2\u0ed3\u0ed4\u0ed5\u0ed6\u0ed7\u0ed8\u0ed9\u0eda\u0edb\u0edc\u0edd\u0ede\u0edf\u0ee0\u0ee1\u0ee2\u0ee3\u0ee4\u0ee5\u0ee6\u0ee7\u0ee8\u0ee9\u0eea\u0eeb\u0eec\u0eed\u0eee\u0eef\u0ef0\u0ef1\u0ef2\u0ef3\u0ef4\u0ef5\u0ef6\u0ef7\u0ef8\u0ef9\u0efa\u0efb\u0efc\u0efd\u0efe\u0eff\u0f00\u0f01\u0f02\u0f03\u0f04\u0f05\u0f06\u0f07\u0f08\u0f09\u0f0a\u0f0b\u0f0c\u0f0d\u0f0e\u0f0f\u0f10\u0f11\u0f12\u0f13\u0f14\u0f15\u0f16\u0f17\u0f18\u0f19\u0f1a\u0f1b\u0f1c\u0f1d\u0f1e\u0f1f\u0f20\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f2a\u0f2b\u0f2c\u0f2d\u0f2e\u0f2f\u0f30\u0f31\u0f32\u0f33\u0f34\u0f35\u0f36\u0f37\u0f38\u0f39\u0f3a\u0f3b\u0f3c\u0f3d\u0f3e\u0f3f\u0f40\u0f41\u0f42\u0f43\u0f44\u0f45\u0f46\u0f47\u0f48\u0f49\u0f4a\u0f4b\u0f4c\u0f4d\u0f4e\u0f4f\u0f50\u0f51\u0f52\u0f53\u0f54\u0f55\u0f56\u0f57\u0f58\u0f59\u0f5a\u0f5b\u0f5c\u0f5d\u0f5e\u0f5f\u0f60\u0f61\u0f62\u0f63\u0f64\u0f65\u0f66\u0f67\u0f68\u0f69\u0f6a\u0f6b\u0f6c\u0f6d\u0f6e\u0f6f\u0f70\u0f71\u0f72\u0f73\u0f74\u0f75\u0f76\u0f77\u0f78\u0f79\u0f7a\u0f7b\u0f7c\u0f7d\u0f7e\u0f7f\u0f80\u0f81\u0f82\u0f83\u0f84\u0f85\u0f86\u0f87\u0f88\u0f89\u0f8a\u0f8b\u0f8c\u0f8d\u0f8e\u0f8f\u0f90\u0f91\u0f92\u0f93\u0f94\u0f95\u0f96\u0f97\u0f98\u0f99\u0f9a\u0f9b\u0f9c\u0f9d\u0f9e\u0f9f\u0fa0\u0fa1\u0fa2\u0fa3\u0fa4\u0fa5\u0fa6\u0fa7\u0fa8\u0fa9\u0faa\u0fab\u0fac\u0fad\u0fae\u0faf\u0fb0\u0fb1\u0fb2\u0fb3\u0fb4\u0fb5\u0fb6\u0fb7\u0fb8\u0fb9\u0fba\u0fbb\u0fbc\u0fbd\u0fbe\u0fbf\u0fc0\u0fc1\u0fc2\u0fc3\u0fc4\u0fc5\u0fc6\u0fc7\u0fc8\u0fc9\u0fca\u0fcb\u0fcc\u0fcd\u0fce\u0fcf\u0fd0\u0fd1\u0fd2\u0fd3\u0fd4\u0fd5\u0fd6\u0fd7\u0fd8\u0fd9\u0fda\u0fdb\u0fdc\u0fdd\u0fde\u0fdf\u0fe0\u0fe1\u0fe2\u0fe3\u0fe4\u0fe5\u0fe6\u0fe7\u0fe8\u0fe9\u0fea\u0feb\u0fec\u0fed\u0fee\u0fef\u0ff0\u0ff1\u0ff2\u0ff3\u0ff4\u0ff5\u0ff6\u0ff7\u0ff8\u0ff9\u0ffa\u0ffb\u0ffc\u0ffd\u0ffe\u0fff\u1000\u1001\u1002\u1003\u1004\u1005\u1006\u1007\u1008\u1009\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u1022\u1023\u1024\u1025\u1026\u1027\u1028\u1029\u102a\u102b\u102c\u102d\u102e\u102f\u1030\u1031\u1032\u1033\u1034\u1035\u1036\u1037\u1038\u1039\u103a\u103b\u103c\u103d\u103e\u103f\u1040\u1041\u1042';

function BaseN(alphabet, blockMaxBitsCount, reverseOrder, oneBigNumber) {
    this.alphabet = alphabet;
    this.charsCount = alphabet.length;
    this.charsCount = alphabet.length;
    this.bigCharsCount = new BigInteger(alphabet.length.toString());
    this.blockMaxBitsCount = blockMaxBitsCount;
    var bitsCharsCount = getOptimalBitsCount(this.charsCount, this.blockMaxBitsCount, 2);
    this.blockBitsCount = bitsCharsCount.bitsCount;
    this.blockCharsCount = bitsCharsCount.charsCountInBits;
    this.reverseOrder = reverseOrder;
    this.oneBigNumber = oneBigNumber;
    
    this.preparePowN(this.blockCharsCount);
    
    this.two_in_power_n = [];
    var a = 2;
    for (var i = 0; i < 8; i++) {
        this.two_in_power_n[i] = new BigInteger((a - 1).toString());
        a *= 2;
    }
    
    this.invAlphabet = [];
    for (var i = 0; i < this.charsCount; i++)
        this.invAlphabet[this.alphabet[i]] = i;
}

BaseN.prototype.encodeString = function(str) {
    return this.encodeBytes(strToUtf8Bytes(str));
}

BaseN.prototype.encodeBytes = function(data)  {
    if (!data || data.length === 0)
        return "";

    var blockBitsCount, blockCharsCount;
    if (!this.oneBigNumber) {
        var bitsCharsCount = getOptimalBitsCount(this.charsCount, this.blockMaxBitsCount, 2);
        this.blockBitsCount = bitsCharsCount.bitsCount;
        this.blockCharsCount = bitsCharsCount.charsCountInBits;
        blockBitsCount = this.blockBitsCount;
        blockCharsCount = this.blockCharsCount;
    } else {
        blockBitsCount = data.length * 8;
        blockCharsCount = Math.ceil(blockBitsCount * Math.log(2) / Math.log(this.alphabet.length));
        this.preparePowN(blockCharsCount);
        this.blockBitsCount = blockBitsCount;
        this.blockCharsCount = blockCharsCount;
    }

    var mainBitsLength = (Math.floor(data.length * 8 / blockBitsCount)) * blockBitsCount;
    var tailBitsLength = data.length * 8 - mainBitsLength;
    var globalBitsLength = mainBitsLength + tailBitsLength;
    var mainCharsCount = Math.floor(mainBitsLength * blockCharsCount / blockBitsCount);
    var tailCharsCount = Math.floor((tailBitsLength * blockCharsCount + blockBitsCount - 1) / blockBitsCount);
    var globalCharsCount = mainCharsCount + tailCharsCount;
    var iterCount = Math.floor(mainCharsCount / blockCharsCount);

    var result = [];

    for (var i = 0; i < iterCount; i++) {
        this.encodeBlock(data, result, i, blockBitsCount, blockCharsCount);
    }
    if (tailBitsLength != 0) {
        var bits = this.getBitsN(data, mainBitsLength, tailBitsLength);
        this.bitsToChars(result, mainCharsCount, tailCharsCount, bits);
    }

    return result.join("");
}
    
BaseN.prototype.encodeBlock = function(src, dst, ind, blockBitsCount, blockCharsCount) {
    var charInd = ind * blockCharsCount;
    var bitInd = ind * blockBitsCount;
    var bits = this.getBitsN(src, bitInd, blockBitsCount);
    this.bitsToChars(dst, charInd, blockCharsCount, bits);
}

BaseN.prototype.bitsToChars = function(chars, ind, count, block) {
    for (var i = 0; i < count; i++) {
        chars[ind + (!this.reverseOrder ? i : count - 1 - i)] = this.alphabet[block.modInt(this.charsCount)];
        block = block.divide(this.bigCharsCount);
    }
}

BaseN.prototype.getBitsN = function(data, bitPos, bitsCount) {
    var result = new BigInteger('0');

    var curBytePos = Math.floor(bitPos / 8);
    var curBitInBytePos = bitPos % 8;
    var xLength = Math.min(bitsCount, 8 - curBitInBytePos);
    
    if (xLength != 0)
    {
        var bigInt = new BigInteger(data[curBytePos].toString());
        result = bigInt.shiftRight(8 - xLength - curBitInBytePos).and(this.two_in_power_n[7 - curBitInBytePos]).shiftLeft(bitsCount - xLength);

        curBytePos += Math.floor((curBitInBytePos + xLength) / 8);
        curBitInBytePos = (curBitInBytePos + xLength) % 8;

        var x2Length = bitsCount - xLength;
        if (x2Length > 8)
            x2Length = 8;

        while (x2Length > 0)
        {
            xLength += x2Length;
            result = result.or((new BigInteger((data[curBytePos] >> 8 - x2Length).toString())).shiftLeft(bitsCount - xLength));

            curBytePos += Math.floor((curBitInBytePos + x2Length) / 8);
            curBitInBytePos = (curBitInBytePos + x2Length) % 8;

            x2Length = bitsCount - xLength;
            if (x2Length > 8)
                x2Length = 8;
        }
    }

    return result;
}

BaseN.prototype.decodeToString = function(str) {
    return bytesToUtf8Str(this.decodeToBytes(str));
}

BaseN.prototype.decodeToBytes = function(data) {
    if (!data || data.length === 0)
        return [];

    var blockBitsCount, blockCharsCount;
    if (!this.oneBigNumber) {
        var bitsCharsCount = getOptimalBitsCount(this.charsCount, this.blockMaxBitsCount, 2);
        this.blockBitsCount = bitsCharsCount.bitsCount;
        this.blockCharsCount = bitsCharsCount.charsCountInBits;
        blockBitsCount = this.blockBitsCount;
        blockCharsCount = this.blockCharsCount;
    } else {
        blockCharsCount = data.length;
        blockBitsCount = Math.floor(Math.floor(blockCharsCount * Math.log(this.alphabet.length) / Math.log(2)) / 8) * 8;
        this.preparePowN(blockCharsCount);
        this.blockBitsCount = blockBitsCount;
        this.blockCharsCount = blockCharsCount;
    }

    var globalBitsLength = Math.floor((Math.floor((data.length - 1) * blockBitsCount / blockCharsCount) + 8) / 8) * 8;
    var mainBitsLength = Math.floor(globalBitsLength / blockBitsCount) * blockBitsCount;
    var tailBitsLength = globalBitsLength - mainBitsLength;
    var mainCharsCount = Math.floor(mainBitsLength * blockCharsCount / blockBitsCount);
    var tailCharsCount = Math.floor((tailBitsLength * blockCharsCount + blockBitsCount - 1) / blockBitsCount);
    var tailBits = this.charsToBits(data, mainCharsCount, tailCharsCount);
    if (tailBits.shiftRight(tailBitsLength) != 0)
    {
        globalBitsLength += 8;
        mainBitsLength = Math.floor(globalBitsLength / blockBitsCount) * blockBitsCount;
        tailBitsLength = globalBitsLength - mainBitsLength;
        mainCharsCount = Math.floor(mainBitsLength * blockCharsCount / blockBitsCount);
        tailCharsCount = Math.floor((tailBitsLength * blockCharsCount + blockBitsCount - 1) / blockBitsCount);
    }
    var iterCount = Math.floor(mainCharsCount / blockCharsCount);

    var result = [];
    for (var i = 0; i < iterCount; i++) {
        this.decodeBlock(data, result, i, blockBitsCount, blockCharsCount);
    }
    if (tailCharsCount != 0) {
        var bits = this.charsToBits(data, mainCharsCount, tailCharsCount);
        this.addBitsN(result, bits, mainBitsLength, tailBitsLength);
    }
    
    return result;
}

BaseN.prototype.decodeBlock = function(src, dst, ind, blockBitsCount, blockCharsCount) {
    var charInd = ind * blockCharsCount;
    var bitInd = ind * blockBitsCount;
    var bits = this.charsToBits(src, charInd, blockCharsCount);
    this.addBitsN(dst, bits, bitInd, blockBitsCount);
}

BaseN.prototype.charsToBits = function(data, ind, count) {
    var result = new BigInteger('0');
    for (var i = 0; i < count; i++) {
        var bigInt = new BigInteger(this.invAlphabet[data[ind + (!this.reverseOrder ? i : count - 1 - i)]].toString());
        result = result.add(bigInt.multiply(this.powN[this.powN.length - 1 - i]));
    }
    return result;
}

BaseN.prototype.addBitsN = function(data, value, bitPos, bitsCount) {
    var curBytePos = Math.floor(bitPos / 8);
    var curBitInBytePos = bitPos % 8;

    var xLength = Math.min(bitsCount, 8 - curBitInBytePos);
    if (xLength != 0) {
        var x1 = value.shiftRight(bitsCount + curBitInBytePos - 8).and(this.two_in_power_n[7 - curBitInBytePos]).byteValue() & 0xFF;
        data[curBytePos] |= x1;

        curBytePos += Math.floor((curBitInBytePos + xLength) / 8);
        curBitInBytePos = (curBitInBytePos + xLength) % 8;

        var x2Length = bitsCount - xLength;
        if (x2Length > 8)
            x2Length = 8;

        while (x2Length > 0) {
            xLength += x2Length;
            var x2 = value.shiftRight(bitsCount - xLength).shiftLeft(8 - x2Length).byteValue() & 0xFF;
            data[curBytePos] |= x2;

            curBytePos += Math.floor((curBitInBytePos + x2Length) / 8);
            curBitInBytePos = (curBitInBytePos + x2Length) % 8;

            x2Length = bitsCount - xLength;
            if (x2Length > 8)
                x2Length = 8;
        }
    }
}

BaseN.prototype.preparePowN = function(blockCharsCount) {
    bigCharsCount = new BigInteger(this.alphabet.length.toString());
    this.powN = [];
    var pow = new BigInteger('1');
    for (var i = 0; i < blockCharsCount - 1; i++) {
        this.powN[blockCharsCount - 1 - i] = pow;
        pow = pow.multiply(bigCharsCount);
    }
    this.powN[0] = pow;
}

function BitsCharsCount(bitsCount, charsCountInBits) {
    this.bitsCount = bitsCount;
    this.charsCountInBits = charsCountInBits;
}

function getOptimalBitsCount(charsCount, maxBitsCount, radix) {
    var bitsCount = 0;
    var charsCountInBits = 0;
    var n1 = logBaseN(charsCount, radix);
    var charsCountLog = Math.log(radix) / Math.log(charsCount);
    var maxRatio = 0;

    for (var n = n1; n <= maxBitsCount; n++)
    {
        var l1 = Math.ceil(n * charsCountLog);
        var ratio = n / l1;
        if (ratio > maxRatio)
        {
            maxRatio = ratio;
            bitsCount = n;
            charsCountInBits = l1;
        }
    }

    return new BitsCharsCount(bitsCount, charsCountInBits);
}

function logBaseN(x, n) {
    var r = 0;
    while ((x = Math.floor(x / n)) !== 0)
        r++;
    return r;
}

function strToUtf8Bytes(str) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

function bytesToUtf8Str(bytes) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = bytes.length;
    i = 0;
    while(i < len) {
        c = bytes[i++];
        switch(c >> 4)
        { 
          case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
          case 12: case 13:
            // 110x xxxx   10xx xxxx
            char2 = bytes[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
          case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = bytes[i++];
            char3 = bytes[i++];
            out += String.fromCharCode(((c & 0x0F) << 12) |
                           ((char2 & 0x3F) << 6) |
                           ((char3 & 0x3F) << 0));
            break;
        }
    }

    return out;
}
